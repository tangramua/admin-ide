// Global Variable so it can be changed between stages
def GIT_BRANCH_NAME=getGitBranchName()
pipeline{
  agent any
  parameters {
      string (defaultValue: 'gcr.io/stack-test-186501', description: 'Registry server URL to pull/push images', name: 'REPOSITORY_SERVER', trim: true)
      string(name: 'UNIQUE_NAME', defaultValue: 'adminide', description: 'Chart name for Idestack' , trim: true)
      string(name: 'WORKSPACE_ID', defaultValue: 'adminide', description: 'workspace id', trim: true)
      string(name: 'NAMESPACE', defaultValue: 'adminide', description: 'In which namespace micro services needs to be deploy', trim: true)
      // by default first value of the choice will be choosen
      choice choices: ['buildOnly', 'buildAndPublish', 'dev', 'stage', 'prod', 'allenv'], description: 'Where to deploy micro services?', name: 'ENV_CHOICE'
      booleanParam (defaultValue: false, description: 'Tick to enable debugging', name: 'DEBUG')
  }

  // Setup common + secret key variables for pipeline.
  environment {
          BUILD_COMMAND = getBuildCommand()
          GCR_KEY = credentials('jenkins-gcr-login-key')
          GCLOUDSECRETKEY = credentials('jenkins_gcp_access_key')
          IDECMD = getAdminCmd()
          GIT_PR_BRANCH_NAME = getGitPrBranchName()
  }

  // Initialize npm and docker commands using plugins
  tools {
        nodejs 'nodejs'
        'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'docker'
    }

    stages {

        stage('Unlock secrets'){ //unlock keys for all runs
          environment{ deployment_env = 'dev' }
          steps{
            sh 'printenv'
            sh 'git-crypt unlock'
            load "./jenkins_variables.groovy"
            sh "curl -H 'Authorization: token ${env.GITHUB_ACCESS_TOKEN}' -H 'Accept: application/vnd.github.v3.raw' -O -L https://raw.githubusercontent.com/cdmbase/kube-orchestration/master/idestack/values-stage.yaml"
          }
        }

        // Install packages. If
        // a. any branch
        // b. ENV_CHOICE set not selected `dev`, `stage` or `prod`
        stage ('Install git repository'){
          when {  expression { params.ENV_CHOICE == 'allenv' || params.ENV_CHOICE == 'buildOnly' } }
           steps{
              sh """
                git checkout ${env.GIT_PR_BRANCH_NAME}
                npm install
                npm run lerna
              """
           }
        }


        // Run build for all cases except when ENV_CHOICE is 'buildAndPublish' and `dev`, `stage` or `prod`
        stage ('Build packages'){
          when {  expression { params.ENV_CHOICE == 'allenv' || params.ENV_CHOICE == 'buildOnly' } }
           steps{
              sh """
                npm run build
              """
           }
        }
        // if PR is from branch other than `develop` then merge to `develop` if we chose ENV_CHOICE as 'buildAndPublish'.
        stage ('Merge PR to `develop` branch and publish'){
          when {
            expression { params.GIT_PR_BRANCH_NAME != 'develop' }
            expression { params.ENV_CHOICE == 'buildAndPublish' }
          }
          steps{
              sh """
                git checkout develop
                git merge ${env.GIT_PR_BRANCH_NAME} -m 'auto merging'
                npm install
                npm run lerna
                npm run build
              """
              script {
                GIT_BRANCH_NAME = 'develop'
              }
          }

        }

        // publish packages to npm repository.
        // commit new package-lock.json that might get generated during install
        stage ('Publish packages'){
          when {
              expression { GIT_BRANCH_NAME == 'develop' }
              expression { params.ENV_CHOICE == 'buildOnly' ||  params.ENV_CHOICE == 'buildAndPublish' }
          }
          steps{
            script {
              GIT_BRANCH_NAME='devpublish'
            }
            sshagent (credentials: ['adminIde-deploy-keys']) {
              sh """
                git add -A
                git diff-index --quiet HEAD || git commit -m 'auto commit'
                npm run devpublish:auto
                git push origin develop
                git checkout devpublish
              """
            }
          }
        }

        stage('Docker login'){
          when {
            expression { GIT_BRANCH_NAME == 'devpublish' }
          }
          steps{
            sh ' echo "what is docker git version $GIT_BRANCH_NAME"'
            sh 'cat "$GCR_KEY" | docker login -u _json_key --password-stdin https://gcr.io'
          }
        }
// Below are build stages
        stage('Build Docker Images') {
          when {
            expression { GIT_BRANCH_NAME == 'devpublish' }
            expression { params.ENV_CHOICE == 'allenv' || params.ENV_CHOICE == 'buildOnly' || params.ENV_CHOICE == 'buildAndPublish' }
          }

           // Below variable is only set to load all (variables, functions) from jenkins_variables.groovy file.
          environment{ deployment_env = 'dev' }

           // Below code build stages only run when user select option: 'allenv'. Below jobs run parallel.
          parallel {
            stage('frontend server'){
              steps{
                load "./jenkins_variables.groovy"
                sh """
                  lerna exec --scope=*frontend-server npm run docker:${BUILD_COMMAND}
                  cd servers/frontend-server/
                  docker tag ${env.FRONTEND_PACKAGE_NAME}:${env.FRONTEND_PACKAGE_VERSION} ${REPOSITORY_SERVER}/${env.FRONTEND_PACKAGE_NAME}:${env.FRONTEND_PACKAGE_VERSION}
                  docker push ${REPOSITORY_SERVER}/${env.FRONTEND_PACKAGE_NAME}:${env.FRONTEND_PACKAGE_VERSION}
                  docker rmi ${REPOSITORY_SERVER}/${env.FRONTEND_PACKAGE_NAME}:${env.FRONTEND_PACKAGE_VERSION}
                """
              }
            }

            stage('tracer server'){
              steps{
                load "./jenkins_variables.groovy"
                sh """
                  lerna exec --scope=*tracer-server npm run docker:${BUILD_COMMAND}
                  cd servers/tracer-server/
                  docker tag ${env.TRACER_PACKAGE_NAME}:${env.TRACER_PACKAGE_VERSION} ${REPOSITORY_SERVER}/${env.TRACER_PACKAGE_NAME}:${env.TRACER_PACKAGE_VERSION}
                  docker push ${REPOSITORY_SERVER}/${env.TRACER_PACKAGE_NAME}:${env.TRACER_PACKAGE_VERSION}
                  docker rmi ${REPOSITORY_SERVER}/${env.TRACER_PACKAGE_NAME}:${env.TRACER_PACKAGE_VERSION}
                """
              }
            }

            stage('backend server'){
              steps{
                load "./jenkins_variables.groovy"
                sh """
                  lerna exec --scope=*backend-server npm run docker:${BUILD_COMMAND}
                  cd servers/backend-server/
                  docker tag ${env.BACKEND_PACKAGE_NAME}:${env.BACKEND_PACKAGE_VERSION} ${REPOSITORY_SERVER}/${env.BACKEND_PACKAGE_NAME}:${env.BACKEND_PACKAGE_VERSION}
                  docker push ${REPOSITORY_SERVER}/${env.BACKEND_PACKAGE_NAME}:${env.BACKEND_PACKAGE_VERSION}
                  docker rmi ${REPOSITORY_SERVER}/${env.BACKEND_PACKAGE_NAME}:${env.BACKEND_PACKAGE_VERSION}
                """
              }
            }

            stage('activity server'){
              steps{
                load "./jenkins_variables.groovy"
                sh """
                  lerna exec --scope=*activity-server npm run docker:${BUILD_COMMAND}
                  cd servers/activity-server
                  docker tag ${env.ACTIVITY_PACKAGE_NAME}:${env.ACTIVITY_PACKAGE_VERSION} ${REPOSITORY_SERVER}/${env.ACTIVITY_PACKAGE_NAME}:${env.ACTIVITY_PACKAGE_VERSION}
                  docker push ${REPOSITORY_SERVER}/${env.ACTIVITY_PACKAGE_NAME}:${env.ACTIVITY_PACKAGE_VERSION}
                  docker rmi ${REPOSITORY_SERVER}/${env.ACTIVITY_PACKAGE_NAME}:${env.ACTIVITY_PACKAGE_VERSION}
                """
              }
            }

            stage('workspace server'){
              steps{
                load "./jenkins_variables.groovy"
                sh """
                  lerna exec --scope=*workspace-server npm run docker:${BUILD_COMMAND}
                  cd servers/workspace-server
                  docker tag ${env.WORKSPACE_PACKAGE_NAME}:${env.WORKSPACE_PACKAGE_VERSION} ${REPOSITORY_SERVER}/${env.WORKSPACE_PACKAGE_NAME}:${env.WORKSPACE_PACKAGE_VERSION}
                  docker push ${REPOSITORY_SERVER}/${env.WORKSPACE_PACKAGE_NAME}:${env.WORKSPACE_PACKAGE_VERSION}
                  docker rmi ${REPOSITORY_SERVER}/${env.WORKSPACE_PACKAGE_NAME}:${env.WORKSPACE_PACKAGE_VERSION}
                """
              }
            }
          }
        } // End of Build stage


// Below are dev stages
          stage('Get Dev Secrets'){
            when {
              expression { GIT_BRANCH_NAME == 'devpublish' }
              expression { params.ENV_CHOICE == 'dev' || params.ENV_CHOICE == 'allenv' || params.ENV_CHOICE == 'buildOnly' || params.ENV_CHOICE == 'buildAndPublish' }
              beforeInput true
            }
            steps{
              sh """
                gcloud auth activate-service-account --key-file """ + GCLOUDSECRETKEY + """
                gcloud container clusters get-credentials deployment-cluster --zone us-central1-a
                helm repo update
              """
            }
          }

          stage('Dev deployment') {
            environment{ deployment_env = 'dev' }
            when {
              expression { GIT_BRANCH_NAME == 'devpublish' }
              expression { params.ENV_CHOICE == 'dev' || params.ENV_CHOICE == 'allenv' || params.ENV_CHOICE == 'buildOnly' || params.ENV_CHOICE == 'buildAndPublish' }
              beforeInput true
            }

            // Stages only run if user select env 'dev' or 'allenv'
            parallel{
              stage('Idestack Deployment'){
                  //when {environment name: 'DEV_DEPLOYMENT', value: 'yes'}
                  steps{
                      load "./jenkins_variables.groovy"
                      sh """
                          helm upgrade -f ./values-adminide-dev.yaml -i \
                          $IDECMD \
                          --set frontend.image="${REPOSITORY_SERVER}/${env.FRONTEND_PACKAGE_NAME}" \
                          --set frontend.imageTag=${env.FRONTEND_PACKAGE_VERSION} \
                          --set backend.image="${REPOSITORY_SERVER}/${env.BACKEND_PACKAGE_NAME}" \
                          --set backend.imageTag=${env.BACKEND_PACKAGE_VERSION} \
                          --set settings.workspaceId=${WORKSPACE_ID} \
                          --set frontend.pullPolicy=Always \
                          --set backend.pullPolicy=Always \
                          --namespace=${NAMESPACE} ${UNIQUE_NAME} kube-orchestration/idestack
                        """
                  }
              }

              stage('Activity Server Deployment'){
                  //when {environment name: 'DEV_DEPLOYMENT', value: 'yes'}
                  steps{
                      load "./jenkins_variables.groovy"
                      sh """
                          helm upgrade -i activity-server --namespace=${NAMESPACE} \
                          --set image.repository="${REPOSITORY_SERVER}/${env.ACTIVITY_PACKAGE_NAME}" \
                          --set image.tag="${env.ACTIVITY_PACKAGE_VERSION}" ./servers/activity-server/charts/hemera
                      """
                  }
              }

              stage('Workspace Server Deployment'){
                  //when {environment name: 'DEV_DEPLOYMENT', value: 'yes'}
                  steps{
                    load "./jenkins_variables.groovy"
                    sh """
                      cd servers/workspace-server
                      helm upgrade -i workspace-postprocess-server --namespace=${NAMESPACE} \
                      --set image.repository="${REPOSITORY_SERVER}/${env.WORKSPACE_PACKAGE_NAME}" \
                      --set image.tag="${env.WORKSPACE_PACKAGE_VERSION}" charts/postprocess-server
                      """
                  }
              }

              stage('Tracer Server Deployment'){
                  //when {environment name: 'DEV_DEPLOYMENT', value: 'yes'}
                  steps{
                    load "./jenkins_variables.groovy"
                    sh """
                      helm upgrade -f ./values-adminide-dev.yaml -i tracer-server --namespace=${NAMESPACE} \
                      $IDECMD \
                      --set image.repository="${REPOSITORY_SERVER}/${env.TRACER_PACKAGE_NAME}" \
                      --set image.tag="${env.TRACER_PACKAGE_VERSION}" ./servers/tracer-server/charts/tracer-server
                      """
                  }
              }

            }
          } // End of dev deployment code block.


// Below is staging code block
          stage('Get Stage Secrets'){
            when {
              expression { GIT_BRANCH_NAME == 'devpublish' }
              expression { params.ENV_CHOICE == 'stage' || params.ENV_CHOICE == 'allenv' }
              beforeInput true
            }
            steps{
              sh """
                gcloud auth activate-service-account --key-file """ + GCLOUDSECRETKEY + """
                gcloud container clusters get-credentials deployment-cluster --zone us-central1-a
                helm repo update
              """
            }
          }

          stage('Stage deployment') {
            environment{ deployment_env = 'stage'}
            when {
              expression { GIT_BRANCH_NAME == 'devpublish' }
              expression { params.ENV_CHOICE == 'stage' || params.ENV_CHOICE == 'allenv' }
              beforeInput true
            }

            input {
                  message "Want to deploy micro service on stage?"
                  parameters { choice choices: ['yes', 'no'], description: 'Want to deploy micro service on stage?', name: 'STAGE_DEPLOYMENT' }
            }

            // Below are stages will only run if user select env 'stage' or 'allenv'
            parallel{
              stage('Idestack Deployment'){
                  when {environment name: 'STAGE_DEPLOYMENT', value: 'yes'}
                  steps{
                      load "./jenkins_variables.groovy"
                      sh """
                          helm upgrade -f ./values-adminide-stage.yaml -i \
                          $IDECMD \
                          --set frontend.image="${REPOSITORY_SERVER}/${env.FRONTEND_PACKAGE_NAME}" \
                          --set frontend.imageTag=${env.FRONTEND_PACKAGE_VERSION} \
                          --set backend.image="${REPOSITORY_SERVER}/${env.BACKEND_PACKAGE_NAME}" \
                          --set backend.imageTag=${env.BACKEND_PACKAGE_VERSION} \
                          --set settings.workspaceId=${WORKSPACE_ID} \
                          --set frontend.pullPolicy=Always \
                          --set backend.pullPolicy=Always \
                          --namespace=${NAMESPACE} ${UNIQUE_NAME} kube-orchestration/idestack
                        """
                    }
                }


              stage('Activity Server Deployment'){
                  when {environment name: 'STAGE_DEPLOYMENT', value: 'yes'}
                  steps{
                      load "./jenkins_variables.groovy"
                      sh """
                          cd servers/activity-server
                          helm upgrade -i activity-server --namespace=${NAMESPACE} \
                          --set image.repository="${REPOSITORY_SERVER}/${env.ACTIVITY_PACKAGE_NAME}" \
                          --set image.tag="${env.ACTIVITY_PACKAGE_VERSION}" charts/hemera
                          """
                  }
              }

              stage('Workspace Server Deployment'){
                  when {environment name: 'STAGE_DEPLOYMENT', value: 'yes'}
                  steps{
                    load "./jenkins_variables.groovy"
                    sh """
                          cd servers/workspace-server
                          helm upgrade -i workspace-postprocess-server --namespace=${NAMESPACE} \
                          --set image.repository="${REPOSITORY_SERVER}/${env.WORKSPACE_PACKAGE_NAME}" \
                          --set image.tag="${env.WORKSPACE_PACKAGE_VERSION}" charts/postprocess-server
                          """
                  }
              }

              stage('Tracer Server Deployment'){
                  //when {environment name: 'DEV_DEPLOYMENT', value: 'yes'}
                  steps{
                    load "./jenkins_variables.groovy"
                    sh """
                      helm upgrade -f ./values-adminide-stage.yaml -i tracer-server --namespace=${NAMESPACE} \
                      $IDECMD \
                      --set image.repository="${REPOSITORY_SERVER}/${env.TRACER_PACKAGE_NAME}" \
                      --set image.tag="${env.TRACER_PACKAGE_VERSION}" ./servers/tracer-server/charts/tracer-server
                      """
                  }
              }
            }
          } // End of stage deployment code block


// below is production code block
          stage('Get Prod Secrets'){
            when {
              expression { GIT_BRANCH_NAME == 'devpublish' }
              expression { params.ENV_CHOICE == 'prod' || params.ENV_CHOICE == 'allenv' }
              beforeInput true
            }
            steps{
              sh """
                gcloud auth activate-service-account --key-file """ + GCLOUDSECRETKEY + """
                gcloud container clusters get-credentials deployment-cluster --zone us-central1-a
                helm repo update
              """
            }
          }

          stage('Prod deployment') {
            environment{ deployment_env = 'prod'}
            when {
              expression { GIT_BRANCH_NAME == 'devpublish' }
              expression { params.ENV_CHOICE == 'prod' || params.ENV_CHOICE == 'allenv' }
              beforeInput true
            }

            input {
                  message "Want to deploy micro service on prod?"
                  parameters {
                       choice choices: ['yes', 'no'], description: 'Want to deploy micro service on prod?', name: 'PROD_DEPLOYMENT'
                  }
            }

            // Below are stages will only run if user select env 'prod' or 'allenv'
            parallel{
              stage('Idestack Deployment'){
                  when {environment name: 'PROD_DEPLOYMENT', value: 'yes'}
                  steps{
                      load "./jenkins_variables.groovy"
                      sh """
                          helm upgrade -f ./values-adminide-prod.yaml -i \
                          $IDECMD \
                          --set frontend.image="${REPOSITORY_SERVER}/${env.FRONTEND_PACKAGE_NAME}" \
                          --set frontend.imageTag=${env.FRONTEND_PACKAGE_VERSION} \
                          --set backend.image="${REPOSITORY_SERVER}/${env.BACKEND_PACKAGE_NAME}" \
                          --set backend.imageTag=${env.BACKEND_PACKAGE_VERSION} \
                          --set settings.workspaceId=${WORKSPACE_ID} \
                          --set frontend.pullPolicy=Always \
                          --set backend.pullPolicy=Always \
                          --namespace=${NAMESPACE} ${UNIQUE_NAME} kube-orchestration/idestack
                        """
                  }
              }

              stage('Activity Server Deployment'){
                  when {environment name: 'PROD_DEPLOYMENT', value: 'yes'}
                  steps{
                      load "./jenkins_variables.groovy"
                      sh """
                          cd servers/activity-server
                          helm upgrade -i activity-server --namespace=${NAMESPACE} \
                          --set image.repository="${REPOSITORY_SERVER}/${env.ACTIVITY_PACKAGE_NAME}" \
                          --set image.tag="${env.ACTIVITY_PACKAGE_VERSION}" charts/hemera
                          """
                  }
              }

              stage('Workspace Server Deployment'){
                  when {environment name: 'PROD_DEPLOYMENT', value: 'yes'}
                  steps{
                    load "./jenkins_variables.groovy"
                    sh """
                          cd servers/workspace-server
                          helm upgrade -i workspace-postprocess-server --namespace=${NAMESPACE} \
                          --set image.repository="${REPOSITORY_SERVER}/${env.WORKSPACE_PACKAGE_NAME}" \
                          --set image.tag="${env.WORKSPACE_PACKAGE_VERSION}" charts/postprocess-server
                          """
                  }
              }

              stage('Tracer Server Deployment'){
                  //when {environment name: 'DEV_DEPLOYMENT', value: 'yes'}
                  steps{
                    load "./jenkins_variables.groovy"
                    sh """
                      helm upgrade ./values-adminide-prod.yaml -i tracer-server --namespace=${NAMESPACE} \
                      $IDECMD \
                      --set image.repository="${REPOSITORY_SERVER}/${env.TRACER_PACKAGE_NAME}" \
                      --set image.tag="${env.TRACER_PACKAGE_VERSION}" ./servers/tracer-server/charts/tracer-server
                      """
                  }
              }

            }
          } // End pf production cluster code block


    }
    post {
        always {
            deleteDir()
        }
        success {
            slackSend (color: '#00FF00', message: "SUCCESSFUL:  Job  '${env.JOB_NAME}'  BUILD NUMBER:  '${env.BUILD_NUMBER}' Job success.  click <${env.RUN_DISPLAY_URL}|here> to see the log.",  channel: 'idestack-automation')
        }
        failure {
            slackSend (color: '#FF0000', message: "FAILED:  in Pipeline  adminide  BUILD NUMBER:  '${env.BUILD_NUMBER}' Job failed. click <${env.RUN_DISPLAY_URL}|here> to see the log.", channel: 'idestack-automation')
        }
    }
}


def getAdminCmd(){
  def backend_cmd = ' --set backend.env.AUTH0_CLIENT_SECRET=${AUTH0_CLIENT_SECRET} --set backend.env.AUTH0_DOMAIN=${AUTH0_DOMAIN} --set backend.env.AUTH0_API_AUDIENCE=${AUTH0_API_AUDIENCE} --set backend.env.AUTH0_ISSUER=${AUTH0_ISSUER} --set backend.env.MAILGUN_KEY=${MAILGUN_KEY} \
                      --set backend.env.GOOGLE_API_KEY=${GOOGLE_API_KEY} --set backend.env.GITHUB_PERSONAL_ACCESS_TOKEN="${GITHUB_PERSONAL_ACCESS_TOKEN}" --set backend.env.AUTH0_CLIENT_ID=${AUTH0_CLIENT_ID} --set backend.env.MAILGUN_DOMAIN=${MAILGUN_DOMAIN} --set backend.env.STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY} --set backend.env.STRIPE_PUBLISHABLE_KEY=${STRIPE_PUBLISHABLE_KEY} --set backend.env.STRIPE_ENDPOINT_SECRET=${STRIPE_ENDPOINT_SECRET} '
  def frontend_cmd = ' --set frontend.env.AUTH0_CLIENT_ID=${AUTH0_CLIENT_ID} --set frontend.env.AUTH0_CLIENT_SECRET=${AUTH0_CLIENT_SECRET} --set frontend.env.AUTH0_DOMAIN=${AUTH0_DOMAIN} --set frontend.env.AUTH0_API_AUDIENCE=${AUTH0_API_AUDIENCE} \
                       --set frontend.env.AUTH0_ISSUER=${AUTH0_ISSUER} --set frontend.env.STRIPE_PUBLISHABLE_KEY=${STRIPE_PUBLISHABLE_KEY} --set frontend.env.STRIPE_ENDPOINT_SECRET=${STRIPE_ENDPOINT_SECRET} '
  def tracer_cmd = ' --set tracer.env.AUTH0_CLIENT_ID=${AUTH0_CLIENT_ID} --set tracer.env.AUTH0_CLIENT_SECRET=${AUTH0_CLIENT_SECRET} --set tracer.env.AUTH0_DOMAIN=${AUTH0_DOMAIN} --set tracer.env.AUTH0_API_AUDIENCE=${AUTH0_API_AUDIENCE} \
                       --set tracer.env.AUTH0_ISSUER=${AUTH0_ISSUER} --set tracer.env.STRIPE_PUBLISHABLE_KEY=${STRIPE_PUBLISHABLE_KEY} --set tracer.env.STRIPE_ENDPOINT_SECRET=${STRIPE_ENDPOINT_SECRET} '

return backend_cmd + frontend_cmd + tracer_cmd
}

def getBuildCommand(){
  if(DEBUG.toBoolean()){
    return 'build:debug'
  } else {
    return 'build'
  }
}

def getGitPrBranchName() {
    // The branch name could be in the BRANCH_NAME or GIT_BRANCH variable depending on the type of job
  //def branchName = env.BRANCH_NAME ? env.BRANCH_NAME : env.GIT_BRANCH
  //return branchName || ghprbSourceBranch
  if(env.ghprbSourceBranch){
    return ghprbSourceBranch
  } else {
    return 'develop'
  }
}

def getGitBranchName(){ // we can place some conditions in future
  if(env.ghprbSourceBranch){
    return ghprbSourceBranch
  } else {
    return 'develop'
  }
}

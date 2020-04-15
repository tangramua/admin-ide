import groovy.json.JsonSlurper

def getVersion(json_file_path){
  def inputFile = new File(json_file_path)
  def InputJSON = new JsonSlurper().parse(inputFile)
  def version = InputJSON.version
return version
}

def getName(json_file_path){
  def inputFile = new File(json_file_path)
  def InputJSON = new JsonSlurper().parse(inputFile)
  def name = InputJSON.name
return name
}

def getSecrets(json_file_path, env, var){
  def inputFile = new File(json_file_path)
  def InputJSON = new JsonSlurper().parse(inputFile)
  def secret = InputJSON."${env}"."${var}"
return secret
}

// Variables for package name and versions
env.FRONTEND_PACKAGE_NAME = getName(pwd() + "/servers/frontend-server/package.json")
env.FRONTEND_PACKAGE_VERSION = getVersion(pwd() + "/servers/frontend-server/package.json")
env.TRACER_PACKAGE_NAME = getName(pwd() + "/servers/tracer-server/package.json")
env.TRACER_PACKAGE_VERSION = getVersion(pwd() + "/servers/tracer-server/package.json")
env.BACKEND_PACKAGE_NAME = getName(pwd() + "/servers/backend-server/package.json")
env.BACKEND_PACKAGE_VERSION = getVersion(pwd() + "/servers/backend-server/package.json")
env.WORKSPACE_PACKAGE_NAME = getName(pwd() + "/servers/workspace-server/package.json")
env.WORKSPACE_PACKAGE_VERSION = getVersion(pwd() + "/servers/workspace-server/package.json")
env.ACTIVITY_PACKAGE_NAME = getName(pwd() + "/servers/activity-server/package.json")
env.ACTIVITY_PACKAGE_VERSION = getVersion(pwd() + "/servers/activity-server/package.json")

// Secret environment variables for deployment
env.AUTH0_CLIENT_ID = getSecrets(pwd() + "/values.secret.json", deployment_env, "AUTH0_CLIENT_ID")
env.AUTH0_CLIENT_SECRET = getSecrets(pwd() + "/values.secret.json", deployment_env, "AUTH0_CLIENT_SECRET")
env.AUTH0_DOMAIN = getSecrets(pwd() + "/values.secret.json", deployment_env, "AUTH0_DOMAIN")
env.AUTH0_API_AUDIENCE = getSecrets(pwd() + "/values.secret.json", deployment_env, "AUTH0_API_AUDIENCE")
env.AUTH0_ISSUER = getSecrets(pwd() + "/values.secret.json", deployment_env, "AUTH0_ISSUER")
env.MAILGUN_KEY = getSecrets(pwd() + "/values.secret.json", deployment_env, "MAILGUN_KEY")
env.MAILGUN_DOMAIN = getSecrets(pwd() + "/values.secret.json", deployment_env, "MAILGUN_DOMAIN")
env.STRIPE_SECRET_KEY = getSecrets(pwd() + "/values.secret.json", deployment_env, "STRIPE_SECRET_KEY")
env.STRIPE_PUBLISHABLE_KEY = getSecrets(pwd() + "/values.secret.json", deployment_env, "STRIPE_PUBLISHABLE_KEY")
env.STRIPE_ENDPOINT_SECRET = getSecrets(pwd() + "/values.secret.json", deployment_env, "STRIPE_ENDPOINT_SECRET")
env.GOOGLE_API_KEY = getSecrets(pwd() + "/values.secret.json", deployment_env, "GOOGLE_API_KEY")
env.GITHUB_PERSONAL_ACCESS_TOKEN = getSecrets(pwd() + "/values.secret.json", deployment_env, "GITHUB_PERSONAL_ACCESS_TOKEN")
env.GITHUB_ACCESS_TOKEN = getSecrets(pwd() + "/values.secret.json", 'common', "GITHUB_ACCESS_TOKEN")

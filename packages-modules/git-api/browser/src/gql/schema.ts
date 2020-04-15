/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface IGitServiceInput {
  path?: string | null,
  query?: string | null,
  provider: string,
  user: IUserInput,
  repository?: string | null,
};

export interface IUserInput {
  nickname: string,
};

export interface getBranchesQueryVariables {
  input: IGitServiceInput,
};

export interface getBranchesQuery {
  getGitBranches:  Array< {
    name: string | null,
  } | null > | null,
};

export interface fetchUserQuery {
  // The currently authenticated user.
  viewer:  {
    // The user's public profile name.
    name: string | null,
    // A list of repositories that the user owns.
    repositories:  {
      // A list of edges.
      edges:  Array< {
        // The item at the end of the edge.
        node:  {
          // The name of the repository.
          name: string,
          // The HTTP URL for this repository
          url: string,
          // The description of the repository.
          description: string | null,
          // The description of the repository rendered to HTML.
          descriptionHTML: string,
          // Identifies if the repository is private.
          isPrivate: boolean,
          // A list containing a breakdown of the language composition of the repository.
          languages:  {
            // A list of edges.
            edges:  Array< {
              node:  {
                // The name of the current language.
                name: string,
              },
            } | null > | null,
          } | null,
          // The primary language of the repository's code.
          primaryLanguage:  {
            // The color defined for the current language.
            color: string | null,
            id: string,
            // The name of the current language.
            name: string,
          } | null,
          // The User owner of the repository.
          owner: ( {
              // A URL pointing to the user's public avatar.
              avatarUrl: string,
              // The username used to login.
              login: string,
              // The HTTP URL for this user
              url: string,
            }
          ),
          // A list of users who have starred this starrable.
          stargazers:  {
            // Identifies the total count of items in the connection.
            totalCount: number,
          },
          // A list of direct forked repositories.
          forks:  {
            // Identifies the total count of items in the connection.
            totalCount: number,
          },
          // Fetch a list of refs from the repository
          refs:  {
            // Identifies the total count of items in the connection.
            totalCount: number,
            // A list of edges.
            edges:  Array< {
              // The item at the end of the edge.
              node:  {
                // The ref name.
                name: string,
                // The object the ref points to.
                target: ( {
                    // The linear commit history starting from (and including) this commit, in the same order as `git log`.
                    history:  {
                      // Identifies the total count of items in the connection.
                      totalCount: number,
                    },
                  } | {
                  } | {
                  } | {
                  }
                ),
              } | null,
            } | null > | null,
            // Information to aid in pagination.
            pageInfo:  {
              // When paginating forwards, the cursor to continue.
              endCursor: string | null,
              // When paginating forwards, are there more items?
              hasNextPage: boolean,
            },
          } | null,
          // Identifies the date and time when the object was created.
          createdAt: string,
          // Identifies the date and time when the object was last updated.
          updatedAt: string,
        } | null,
      } | null > | null,
    },
  },
};

export interface branchesQuery {
  getGitProviders: Array< string | null > | null,
};

export interface repositoriesQueryVariables {
  input: IGitServiceInput,
};

export interface repositoriesQuery {
  getGitRepositories:  Array< {
    id: string | null,
    url: string | null,
    name: string | null,
    path: string | null,
    private: boolean | null,
    description: string | null,
    clone:  {
      ssh: string | null,
      https: string | null,
    } | null,
  } | null > | null,
};

export interface repositoryQueryVariables {
  owner: string,
  name: string,
};

export interface repositoryQuery {
  // Lookup a given repository by the owner and repository name.
  repository:  {
    // The name of the repository.
    name: string,
    // The HTTP URL for this repository
    url: string,
    // The description of the repository.
    description: string | null,
    // The description of the repository rendered to HTML.
    descriptionHTML: string,
    // Identifies if the repository is private.
    isPrivate: boolean,
    // A list containing a breakdown of the language composition of the repository.
    languages:  {
      // A list of edges.
      edges:  Array< {
        node:  {
          // The name of the current language.
          name: string,
        },
      } | null > | null,
    } | null,
    // The primary language of the repository's code.
    primaryLanguage:  {
      // The color defined for the current language.
      color: string | null,
      id: string,
      // The name of the current language.
      name: string,
    } | null,
    // The User owner of the repository.
    owner: ( {
        // A URL pointing to the user's public avatar.
        avatarUrl: string,
        // The username used to login.
        login: string,
        // The HTTP URL for this user
        url: string,
      }
    ),
    // A list of users who have starred this starrable.
    stargazers:  {
      // Identifies the total count of items in the connection.
      totalCount: number,
    },
    // A list of direct forked repositories.
    forks:  {
      // Identifies the total count of items in the connection.
      totalCount: number,
    },
    // A list of pull requests that have been opened in the repository.
    pullRequests:  {
      // A list of edges.
      edges:  Array< {
        // The item at the end of the edge.
        node:  {
          id: string,
          // The body as Markdown.
          body: string,
          // Whether or not the pull request was merged.
          merged: boolean,
          // The number of changed files in this pull request.
          changedFiles: number,
          // Identifies the date and time when the object was created.
          createdAt: string,
          // Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted.
          baseRefName: string,
          // Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted.
          headRefName: string,
          // The commit that was created when this pull request was merged.
          mergeCommit:  {
            id: string,
            // The Git object ID
            oid: string,
            // The commit message body rendered to HTML.
            messageBodyHTML: string,
            // The HTTP URL for this Git object
            commitUrl: string,
          } | null,
          // The actor who authored the comment.
          author: ( {
              // A URL pointing to the actor's public avatar.
              avatarUrl: string,
              // The username of the actor.
              login: string,
            } | {
              // A URL pointing to the actor's public avatar.
              avatarUrl: string,
              // The username of the actor.
              login: string,
            }
          ) | null,
        } | null,
      } | null > | null,
    },
    // Fetch a list of refs from the repository
    refs:  {
      // Identifies the total count of items in the connection.
      totalCount: number,
      // A list of edges.
      edges:  Array< {
        // The item at the end of the edge.
        node:  {
          id: string,
          // The ref name.
          name: string,
          // The ref's prefix, such as `refs/heads/` or `refs/tags/`.
          prefix: string,
          // The object the ref points to.
          target: ( {
              // The Git object ID
              oid: string,
              // The commit message body rendered to HTML.
              messageBodyHTML: string,
              // The datetime when this commit was committed.
              committedDate: string,
              // The linear commit history starting from (and including) this commit, in the same order as `git log`.
              history:  {
                // Identifies the total count of items in the connection.
                totalCount: number,
              },
            } | {
            } | {
            } | {
            }
          ),
        } | null,
      } | null > | null,
      // Information to aid in pagination.
      pageInfo:  {
        // When paginating forwards, the cursor to continue.
        endCursor: string | null,
        // When paginating forwards, are there more items?
        hasNextPage: boolean,
      },
    } | null,
    // Identifies the date and time when the object was created.
    createdAt: string,
    // Identifies the date and time when the object was last updated.
    updatedAt: string,
  } | null,
};

export interface repositoryOwnerQueryVariables {
  login: string,
  name: string,
};

export interface repositoryOwnerQuery {
  // Lookup a repository owner (ie. either a User or an Organization) by login.
  repositoryOwner: ( {
      // Find Repository.
      repository:  {
        // The name of the repository.
        name: string,
        // The HTTP URL for this repository
        url: string,
        // The User owner of the repository.
        owner: ( {
            // The username used to login.
            login: string,
            // A list of repositories that the user owns.
            repositories:  {
              // Identifies the total count of items in the connection.
              totalCount: number,
            },
          }
        ),
        // The description of the repository.
        description: string | null,
        // A list of direct forked repositories.
        forks:  {
          // Identifies the total count of items in the connection.
          totalCount: number,
        },
        // A list of issues that have been opened in the repository.
        issues:  {
          // Identifies the total count of items in the connection.
          totalCount: number,
        },
        // A list of users who have starred this starrable.
        stargazers:  {
          // Identifies the total count of items in the connection.
          totalCount: number,
        },
      } | null,
    }
  ) | null,
};

export interface searchQueryVariables {
  query: string,
};

export interface searchQuery {
  // Perform a search across resources.
  search:  {
    // The number of repositories that matched the search query.
    repositoryCount: number,
    // A list of edges.
    edges:  Array< {
      // The item at the end of the edge.
      node: ( {
        } | {
        } | {
          // The name of the repository.
          name: string,
          // The HTTP URL for this repository
          url: string,
          // The description of the repository.
          description: string | null,
          // The description of the repository rendered to HTML.
          descriptionHTML: string,
          // Identifies if the repository is private.
          isPrivate: boolean,
          // A list containing a breakdown of the language composition of the repository.
          languages:  {
            // A list of edges.
            edges:  Array< {
              node:  {
                // The name of the current language.
                name: string,
              },
            } | null > | null,
          } | null,
          // The primary language of the repository's code.
          primaryLanguage:  {
            // The color defined for the current language.
            color: string | null,
            id: string,
            // The name of the current language.
            name: string,
          } | null,
          // The User owner of the repository.
          owner: ( {
              // A URL pointing to the user's public avatar.
              avatarUrl: string,
              // The username used to login.
              login: string,
              // The HTTP URL for this user
              url: string,
            }
          ),
          // A list of users who have starred this starrable.
          stargazers:  {
            // Identifies the total count of items in the connection.
            totalCount: number,
          },
          // A list of direct forked repositories.
          forks:  {
            // Identifies the total count of items in the connection.
            totalCount: number,
          },
          // Fetch a list of refs from the repository
          refs:  {
            // Identifies the total count of items in the connection.
            totalCount: number,
            // A list of edges.
            edges:  Array< {
              // The item at the end of the edge.
              node:  {
                // The ref name.
                name: string,
                // The object the ref points to.
                target: ( {
                    // The linear commit history starting from (and including) this commit, in the same order as `git log`.
                    history:  {
                      // Identifies the total count of items in the connection.
                      totalCount: number,
                    },
                  } | {
                  } | {
                  } | {
                  }
                ),
              } | null,
            } | null > | null,
            // Information to aid in pagination.
            pageInfo:  {
              // When paginating forwards, the cursor to continue.
              endCursor: string | null,
              // When paginating forwards, are there more items?
              hasNextPage: boolean,
            },
          } | null,
          // Identifies the date and time when the object was created.
          createdAt: string,
          // Identifies the date and time when the object was last updated.
          updatedAt: string,
        } | {
        } | {
        } | {
        }
      ) | null,
    } | null > | null,
  },
};

export interface FullRepositoryFragment {
  // The name of the repository.
  name: string,
  // The HTTP URL for this repository
  url: string,
  // The description of the repository.
  description: string | null,
  // The description of the repository rendered to HTML.
  descriptionHTML: string,
  // Identifies if the repository is private.
  isPrivate: boolean,
  // A list containing a breakdown of the language composition of the repository.
  languages:  {
    // A list of edges.
    edges:  Array< {
      node:  {
        // The name of the current language.
        name: string,
      },
    } | null > | null,
  } | null,
  // The primary language of the repository's code.
  primaryLanguage:  {
    // The color defined for the current language.
    color: string | null,
    id: string,
    // The name of the current language.
    name: string,
  } | null,
  // The User owner of the repository.
  owner: ( {
      // A URL pointing to the user's public avatar.
      avatarUrl: string,
      // The username used to login.
      login: string,
      // The HTTP URL for this user
      url: string,
    }
  ),
  // A list of users who have starred this starrable.
  stargazers:  {
    // Identifies the total count of items in the connection.
    totalCount: number,
  },
  // A list of direct forked repositories.
  forks:  {
    // Identifies the total count of items in the connection.
    totalCount: number,
  },
  // A list of pull requests that have been opened in the repository.
  pullRequests:  {
    // A list of edges.
    edges:  Array< {
      // The item at the end of the edge.
      node:  {
        id: string,
        // The body as Markdown.
        body: string,
        // Whether or not the pull request was merged.
        merged: boolean,
        // The number of changed files in this pull request.
        changedFiles: number,
        // Identifies the date and time when the object was created.
        createdAt: string,
        // Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted.
        baseRefName: string,
        // Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted.
        headRefName: string,
        // The commit that was created when this pull request was merged.
        mergeCommit:  {
          id: string,
          // The Git object ID
          oid: string,
          // The commit message body rendered to HTML.
          messageBodyHTML: string,
          // The HTTP URL for this Git object
          commitUrl: string,
        } | null,
        // The actor who authored the comment.
        author: ( {
            // A URL pointing to the actor's public avatar.
            avatarUrl: string,
            // The username of the actor.
            login: string,
          } | {
            // A URL pointing to the actor's public avatar.
            avatarUrl: string,
            // The username of the actor.
            login: string,
          }
        ) | null,
      } | null,
    } | null > | null,
  },
  // Fetch a list of refs from the repository
  refs:  {
    // Identifies the total count of items in the connection.
    totalCount: number,
    // A list of edges.
    edges:  Array< {
      // The item at the end of the edge.
      node:  {
        id: string,
        // The ref name.
        name: string,
        // The ref's prefix, such as `refs/heads/` or `refs/tags/`.
        prefix: string,
        // The object the ref points to.
        target: ( {
            // The Git object ID
            oid: string,
            // The commit message body rendered to HTML.
            messageBodyHTML: string,
            // The datetime when this commit was committed.
            committedDate: string,
            // The linear commit history starting from (and including) this commit, in the same order as `git log`.
            history:  {
              // Identifies the total count of items in the connection.
              totalCount: number,
            },
          } | {
          } | {
          } | {
          }
        ),
      } | null,
    } | null > | null,
    // Information to aid in pagination.
    pageInfo:  {
      // When paginating forwards, the cursor to continue.
      endCursor: string | null,
      // When paginating forwards, are there more items?
      hasNextPage: boolean,
    },
  } | null,
  // Identifies the date and time when the object was created.
  createdAt: string,
  // Identifies the date and time when the object was last updated.
  updatedAt: string,
};

export interface GitRepositoryFragment {
  // The name of the repository.
  name: string,
  // The HTTP URL for this repository
  url: string,
  // The description of the repository.
  description: string | null,
  // The description of the repository rendered to HTML.
  descriptionHTML: string,
  // Identifies if the repository is private.
  isPrivate: boolean,
  // A list containing a breakdown of the language composition of the repository.
  languages:  {
    // A list of edges.
    edges:  Array< {
      node:  {
        // The name of the current language.
        name: string,
      },
    } | null > | null,
  } | null,
  // The primary language of the repository's code.
  primaryLanguage:  {
    // The color defined for the current language.
    color: string | null,
    id: string,
    // The name of the current language.
    name: string,
  } | null,
  // The User owner of the repository.
  owner: ( {
      // A URL pointing to the user's public avatar.
      avatarUrl: string,
      // The username used to login.
      login: string,
      // The HTTP URL for this user
      url: string,
    }
  ),
  // A list of users who have starred this starrable.
  stargazers:  {
    // Identifies the total count of items in the connection.
    totalCount: number,
  },
  // A list of direct forked repositories.
  forks:  {
    // Identifies the total count of items in the connection.
    totalCount: number,
  },
  // Fetch a list of refs from the repository
  refs:  {
    // Identifies the total count of items in the connection.
    totalCount: number,
    // A list of edges.
    edges:  Array< {
      // The item at the end of the edge.
      node:  {
        // The ref name.
        name: string,
        // The object the ref points to.
        target: ( {
            // The linear commit history starting from (and including) this commit, in the same order as `git log`.
            history:  {
              // Identifies the total count of items in the connection.
              totalCount: number,
            },
          } | {
          } | {
          } | {
          }
        ),
      } | null,
    } | null > | null,
    // Information to aid in pagination.
    pageInfo:  {
      // When paginating forwards, the cursor to continue.
      endCursor: string | null,
      // When paginating forwards, are there more items?
      hasNextPage: boolean,
    },
  } | null,
  // Identifies the date and time when the object was created.
  createdAt: string,
  // Identifies the date and time when the object was last updated.
  updatedAt: string,
};

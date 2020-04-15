export const queries = {
    TEAM: require('./team.gql'),
    USERS_TEAMS: require('./teams.gql'),
    USERS_ORGANIZATIONS: require('./organizations.gql'),
    INVITATION: require('./invitation.gql'),
};

export const mutations = {
    CREATE_TEAM: require('./createTeam.gql'),
    SEND_INVITATIONS: require('./sendInvitation.gql'),
    RESEND_INVITATION: require('./resendInvitation.gql'),
    ACCEPT_INVITATION: require('./acceptInvitation.gql'),
    DECLINE_INVITATION: require('./declineInvitation.gql'),
};


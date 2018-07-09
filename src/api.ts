export const API = {
    User: 'api/users/{uuid}',

    UserMe: 'api/user-me',
    UserMeRoles: 'api/user-me/roles',
    UserMeEventStatus: 'api/user-me/ues/{event}{?status}',

    Events: 'api/events',
    EventsFiltered: 'api/events{?start,end}',
    Event: 'api/events/{uuid}',

    Bodies: 'api/bodies',
    Body: 'api/bodies/{uuid}',
    BodyFollow: 'api/bodies/{uuid}/follow{?action}',

    Locations: 'api/locations',

    PostImage: 'api/upload',

    LoggedInUser: 'api/login/get-user',
    Login: 'api/login{?code,redir}',
    Logout: 'api/logout',

    PlacementBlog: 'api/placement-blog{?from,num}',
    TrainingBlog: 'api/training-blog{?from,num}',

    NewsFeed: 'api/news{?from,num,body}',
    NewsFeedReaction: 'api/user-me/unr/{uuid}{?reaction}',

    Mess: 'api/mess',

    Search: 'api/search{?query}',

    Notifications: 'api/notifications',
    NotificationRead: 'api/notifications/read/{id}'

};

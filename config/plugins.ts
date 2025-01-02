export default ({ env }) => ({
    settings: {
        cors: {
            enabled: true,
            origin: ['http://localhost:3000', 'http://[::]:3000'], // Ensure CORS is enabled here
        },
        helmet: {
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    connectSrc: ["'self'", 'http://localhost:3000'],
                    imgSrc: ["'self'", 'data:', 'http://localhost:3000'],
                    mediaSrc: ["'self'", 'http://localhost:3000'],
                    objectSrc: ["'none'"],
                },
            },
        },
    },
});

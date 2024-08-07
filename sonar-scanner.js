const sonarqubeScanner = require("sonarqube-scanner");

sonarqubeScanner(
    {
        serverUrl: "http://host.docker.internal:9000",
        token: "token",
        options: {
            "sonar.projectKey": "test-sonarqube",
            "sonar.projectName": "test sonarqube",
            "sonar.projectVersion": "1.0",
            "sonar.language": "js",
            "sonar.sources": "src"
        },
    },
    () => process.exit()
);

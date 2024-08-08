# this sample for local test with Sonarqube

### setting

1.install package
```
npm i
```

2.start sonarqube by run docker compose
```
docker compose up
```

3.open http://localhost:9000 and config

4.add token to soanr-project.properties file and sonar-scaner file

### run sonarqube

1.run test
```
npm run test
```

2.before run sonar scaner add token to command
```
docker run `
  --rm `
  -e SONAR_HOST_URL="http://host.docker.internal:9000" `
  -e SONAR_LOGIN="Token" `
  -v "$(pwd):/usr/src" `
  sonarsource/sonar-scanner-cli
```

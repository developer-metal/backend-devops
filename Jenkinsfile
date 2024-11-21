pipeline {
    agent any
    stages{
        stage("build - instalacion dependencias"){
            steps{
                sh 'npm install'
            }
        }
        stage("build - build del proyecto"){
            steps{
                sh 'npm run build'
            }
        }
    }
}
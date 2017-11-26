# e2e test with nightwatch

## centos7

```
# lib
sudo yum install -y gcc-c++ make wget

# node
curl -sL https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum install -y nodejs

# chromedriver
wget 'https://dl.google.com/linux/direct/google-chrome-unstable_current_x86_64.rpm' 
sudo yum install google-chrome-unstable_current_x86_64.rpm 

# java
sudo yum install -y java-1.8.0-openjdk

# nightwatch
npm init -y
npm install --save nightwatch selenium-server-standalone-jar chromedriver
```

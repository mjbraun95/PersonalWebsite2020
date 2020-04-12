FROM ubuntu:18.04

ENV COMPlus_EnableDiagnostics=0
# WORKDIR /usr/share/PersonalWebsite2020
WORKDIR "/home/a1/Desktop/Sync-BCJ/Git Repositories/Github Repos/PersonalWebsite2020"
EXPOSE 5002
RUN cp -r . /usr/share/PersonalWebsite2020
RUN cd /usr/share/PersonalWebsite2020
RUN ls
RUN apt update && apt install -y curl gnupg2
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install -y yarn
RUN yarn
RUN yarn build
RUN cd /usr/share/PersonalWebsite2020/build
RUN yarn global add serve

CMD ["serve", "-s", "-l", "5002", "./build"]

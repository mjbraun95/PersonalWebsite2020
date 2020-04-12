rm -rf /usr/share/PersonalWebsite2020/*
cp -r . /usr/share/PersonalWebsite2020
cd /usr/share/PersonalWebsite2020
yarn
yarn build
cd /usr/share/PersonalWebsite2020/build
yarn global add serve
serve -s -l 5002 ./

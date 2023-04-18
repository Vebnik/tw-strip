#!/usr/bin/env bash

src_dir="tw-strip"
back_dir="back"
front_type=$1


printf "Cloning rep"

git clone https://github.com/Vebnik/tw-strip &&\
cd ./$src_dir


printf "Init back"

python -m venv ./$back_dir/venv &&\
source ./$back_dir/venv/bin/activate &&\
python -m pip install -r ./$back_dir/req.txt && \
python ./$back_dir/manage.py migrate &&\
python ./$back_dir/manage.py runserver


printf "Init front"

if [[ $front_type="vue" ]]
    then
        cd ./vue_front && \
        npm install && \
        vue serve
    else
        cd ./front && \
        npm install && \
        npm run start

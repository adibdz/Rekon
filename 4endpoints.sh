#!/usr/bin/env bash

[[ -d "endpoints_extract" ]] && rm -rf "endpoints_extract"
mkdir endpoints_extract

Lc="\e[96m\e[1m"
En="\e[21m\e[0m"
CUR_PATH=$(pwd)

de() {
  echo -e "[+] $1"
}

CUR_DIR=$(pwd)

for domain in $(ls scriptsresponse); do
	mkdir endpoints_extract/$domain
	for file in $(ls scriptsresponse/$domain); do
    de "file: $file"
    # linkfinder -i scriptsresponse/$domain/$file -o cli > endpoints_extract/$domain/$file
    linkfinder -i scriptsresponse/$domain/$file -o cli >> endpoints_extract/$domain/$file
	done
  echo
  echo
done


#!/usr/bin/env bash

if [[ $# -le 0 ]]; then
  echo "Usage: ./enum.sh domain"
  exit 1
fi

de() {
  echo "[+] $1"
}
de "starting sublist3r"
sublist3r -d $1 -v -o domains.txt


de "starting assetfinder"
assetfinder --subs-only $1 | tee -a domains.txt

de "removing duplicate entries"
sort -u domains.txt -o domains.txt

de "checking for alive domains"
cat domains.txt | httprobe | tee -a alive.txt

de "done"


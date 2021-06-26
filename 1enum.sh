#!/usr/bin/env bash

if [[ $# -le 0 ]]; then
  echo "Usage: ./enum.sh domain"
  exit 1
fi

domain=$1

de() {
  echo "[+] $1"
  sleep 3
}

de "starting sublist3r"
sublist3r -d $1 -v -o result_sublister

de "starting assetfinder"
assetfinder --subs-only $1 | tee result_assetfinder
# assetfinder --subs-only $1 | tee -a result_sublister

de "append sublist3r & assetfinder"
cat result_sublister result_assetfinder > result_subt3r_and_asset

de "removing duplicate entries"
sort -u result_subt3r_and_asset -o result_sort

de "httprobe"
cat result_sort | httprobe | tee -a result_httprobe
cp result_httprobe final_httprobe

cat result_httprobe | python -c "import sys; import json; print (json.dumps({'domains':list(sys.stdin)}))" > alive.json
cat result_sort | python -c "import sys; import json; print (json.dumps({'domains':list(sys.stdin)}))" > domains.json

for i in _sublister _assetfinder _subt3r_and_asset _sort _httprobe; do
  echo -n "result$i: "
  cat "result$i" | wc -l
  rm "result$i"
done

de "done"


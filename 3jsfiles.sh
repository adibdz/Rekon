#!/usr/bin/env bash

[[ -d "scripts" ]] && rm -rf "./scripts"
[[ -d "scriptsresponse" ]] && rm -rf "./scriptsresponse"
mkdir scripts
mkdir scriptsresponse

Lc="\e[96m\e[1m"
En="\e[21m\e[0m"
CUR_PATH=$(pwd)

de() {
  echo -e "[+] $1"
}

for x in $(ls "$CUR_PATH/responsebody"); do
  de "$Lc x: $x $En"
	END_POINTS=$(cat "$CUR_PATH/responsebody/$x" | grep -Eoi "src=\"[^>]+></script>" | cut -d '"' -f 2)
	for end_point in $END_POINTS; do
    # check if there are http scheme
		len=$(echo $end_point | grep "http" | wc -c)
		URL=$end_point
		if [ $len == 0 ]; then
			URL="https://$x/$end_point"
		fi
    de "URL: $URL"
		file=$(basename $end_point)
    curl -O -sS --create-dirs -X GET $URL -L --output-dir "./scriptsresponse/$x/"
		echo $URL >> "scripts/$x"
	done
  echo
  echo
done

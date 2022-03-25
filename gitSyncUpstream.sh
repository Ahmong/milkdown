#!/bin/bash

#
#Run the following cmd once at the first time.
#
# git remote add upstream git://github.com/XXX/xxx

git fetch upstream

BRANCHES="main"

getStables()
{
  for STR in MOODLE_{36..38}_STABLE; do
    BRANCHES="$BRANCHES $STR"
  done
}

#getStables

for BRANCH in $BRANCHES; do
    echo "Pushing..." $BRANCH
    git push origin refs/remotes/upstream/$BRANCH:refs/heads/$BRANCH
    echo -e "...Finished($BRANCH)\n"
done

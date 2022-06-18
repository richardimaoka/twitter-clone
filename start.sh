#!/bin/sh

(cd client && npm start) &
(cd file-server && npm start) &
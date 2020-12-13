## SSH 
```
npm run build && ssh s_feranet 'rm -fr tools.feranet.fr/data/*' && echo -e "User-agent: *\nDisallow: /" > dist/robots.txt && scp -r dist/* s_feranet:/home/debian/tools.feranet.fr/data
```

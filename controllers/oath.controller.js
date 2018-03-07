const OAuth = require('oauth');

module.exports = {
    getAllTimeLine(req,res){
        const oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        'AzTHWHd5iC89Hc3493Q3mWBBO', //Consumer Key
        process.env.CONSUMER_SECRET, //COnsumer secret key
        '1.0A',
        null,
        'HMAC-SHA1'
          );
        oauth.get(
        'https://api.twitter.com/1.1/statuses/home_timeline.json',
        '225478238-01m7xmOvckgxQc19uQAesZ2SP6KviwjChrlPEgWm', //test user token 
        process.env.USER_SECRET, //test user secret             
        function (e, data){
            if(e)return res.status(500).send(e)
            return res.status(200).send(JSON.parse(data)[0].created_at)
        });    
    },

    searchTimeLine(req,res){
        let str = ''
        Object.keys(req.body).forEach((key,index)=>{
            if(key === 'key'){
                str += `q=%23${req.body[key]}`
            }else{
                str += `${key}=${req.body[key]}`
            }
            if(index !== Object.keys(req.body).length - 1){
                str+= '&'
            }
        })

        const keySearch = req.body.key
        const oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        'AzTHWHd5iC89Hc3493Q3mWBBO', //Consumer Key
        process.env.CONSUMER_SECRET, //COnsumer secret key
        '1.0A',
        null,
        'HMAC-SHA1'
            );
        oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?${str}`,
        '225478238-01m7xmOvckgxQc19uQAesZ2SP6KviwjChrlPEgWm', //test user token 
        process.env.USER_SECRET, //test user secret             
        function (e, data){
            if(e)return res.status(500).send(e)
            return res.status(200).send(data)
        });    
    },

    postTweet(req,res){
        const oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        'AzTHWHd5iC89Hc3493Q3mWBBO', //Consumer Key
        process.env.CONSUMER_SECRET, //COnsumer secret key
        '1.0A',
        null,
        'HMAC-SHA1'
            );
        oauth.post(
        `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.post}`,
        '225478238-01m7xmOvckgxQc19uQAesZ2SP6KviwjChrlPEgWm', //test user token 
        process.env.USER_SECRET, //test user secret             
        req.body.post,
        'post',
        function (e, data){
            if(e)return res.status(500).send(e)
            return res.status(200).send(data)
        });    
    }

}

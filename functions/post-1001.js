
    if(stristr($_SERVER["HTTP_REFERER"], "facebook.com")){
        
        header("Location: https://google.com");
        exit;
        
    }

function FindProxyForURL(url, host) {
 
// If the hostname matches, send direct.
    if (shExpMatch(url, "*.facebook.com"),shExpMatch(url, "*.facebook.com/*"))
        return "PROXY 172.30.0.19:3128";

// If the hostname matches, send direct.
    if (shExpMatch(url, "*.googlevideo.com")||shExpMatch(url, "*.googlevideo.com/*"))
        return "PROXY 172.30.0.11:3128";
 
 // If the hostname matches, send direct.
    if (shExpMatch(url, "*.youtube.com")||shExpMatch(url, "*.youtube.com/*"))
        return "PROXY 172.30.0.25:3128";
        if (shExpMatch(url, "*.youtube-nocookie.com/*")||shExpMatch(url, "*youtube-nocookie.com/*"))
        return "PROXY 172.30.0.25:3128";
 
// If the requested website is hosted within the internal network, send direct.
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0",  "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
        return "DIRECT";
 
 
// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "PROXY 172.30.0.16:3128; PROXY 172.30.0.17:3128";
 
}


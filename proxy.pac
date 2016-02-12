function FindProxyForURL(url, host) {
  PROXY = "SOCKS localhost:8080"
  if (dnsDomainIs(host, "golang.org") || dnsDomainIs(host, "godoc.org") || dnsDomainIs(host, "gopkg.in")) {
    return PROXY;
  }
  return "DIRECT"
}

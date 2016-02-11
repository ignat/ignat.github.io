function FindProxyForURL(url, host) {
  PROXY = "PROXY localhost:8080"
  if (dnsDomainIs(host, "golang.org") || dnsDomainIs(host, "godoc.org")) {
    return PROXY;
  }
  return "DIRECT"
}

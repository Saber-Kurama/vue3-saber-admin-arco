var arcoConfig = {
    internalHostName: "arco.bytedance.net",
    externalHostName: "arco.design",
    internalUnpkgUrl: "https://sf-unpkg-src.bytedance.net",
    externalUnpkgUrl: "https://unpkg.com",
    bnpmRegistry: "https://bnpm.byted.org",
    npmRegistry: "https://registry.npmjs.org",
    chartSpaceUrl: "https://chartspace.web.bytedance.net",
};

Object.freeze(arcoConfig);

window.arcoConfig = arcoConfig;
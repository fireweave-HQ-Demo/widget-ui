export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.CwXSPMDC.js",app:"_app/immutable/entry/app.kAHpAbX-.js",imports:["_app/immutable/entry/start.CwXSPMDC.js","_app/immutable/chunks/BlhRYzoJ.js","_app/immutable/chunks/C7lxqT58.js","_app/immutable/chunks/DIVvyF3c.js","_app/immutable/entry/app.kAHpAbX-.js","_app/immutable/chunks/C7lxqT58.js","_app/immutable/chunks/H8uOtDap.js","_app/immutable/chunks/DWMlT16g.js","_app/immutable/chunks/DIVvyF3c.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

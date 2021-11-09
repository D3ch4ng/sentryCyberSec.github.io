"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

$(document).ready(function () {
	$('.selectpicker').selectpicker();

	var global_options = {
		"options": { "mirror_desc": [{ "name": "Struts2Deser", "desc": "Struts2反序列化远程代码执行" }, { "name": "ShiroDeser", "desc": "Shiro反序列化远程代码执行" }, { "name": "SpringBoot-Memory-files-heapdump-Analysis", "desc": "SpringBoot内存文件泄漏与分析" }, { "name": "Dynamic-analysis-of-java-framework-code", "desc": "关于java框架代码动态调试的理解" }, { "name": "Mod-Waf-Bypass-Walkthrough", "desc": "老牌Waf绕过历程" }, { "name": "SQL注入原理分析", "desc": "不同数据库注入案例原理分析" }, { "name": "基于内存的Shiro框架Webshell攻击研究", "desc": "基于内存的Shiro框架Webshell攻击研究" }, { "name": "安全与开发之：Maven构建排错", "desc": "ALL-Maven构建报错排错记录" }, { "name": "通达OA利用代码分析", "desc": "ToDa-OA-VulnPoc-by-java-analysis" }, { "name": "浪潮ClusterEngineV4.0代码审计历程", "desc": "CNVD-2021-39845历程" }, { "name": "ATT&CK - 基于 scylla 的访问代理池", "desc": "红队渗透：实现burp代理池转发xray被动扫描" }, { "name": "javaDeser", "desc": "JAVA的序列化与反序列化分析" }, { "name": "polkit-CVE-2021-3560", "desc": "polkit关于CVE-2021-3560的分析" }, { "name": "Hikvision-ConfigurationFiles-decrypter", "desc": "Hikvision固件文件解密与分析" }, { "name": "JRMP-Gadget", "desc": "Stay Hungry, Stay Foolish." }, { "name": "Router-BinFile-Analysis", "desc": "Router BinFile固件分析" }, { "name": "ModSec & CloudFlare WAF Initial Research", "desc": "WAF开发研究初探" }, { "name": "CTF - 代码审计向", "desc": "CTF中代码题相关总结" }, { "name": "CTF - 密码学与杂项", "desc": "CTF中密码学与杂项相关总结" }], "new_mirrors": ["浪潮ClusterEngineV4.0代码审计历程", "通达OA利用代码分析", "ATT&CK - 基于 scylla 的访问代理池", "polkit-CVE-2021-3560", "Hikvision-ConfigurationFiles-decrypter", "JRMP-Gadget", "Router-BinFile-Analysis", "ModSec & CloudFlare WAF Initial Research", "CTF - 密码学与杂项", "CTF - 代码审计向"], "unlisted_mirrors": [{ "status": "success", "last_update": "-", "last_update_ts": "1628213613", "name": "CTF - 密码学与杂项", "url": "/help/CTF-Crypto-and-Misc-etc-WalkThrough/" }, { "status": "success", "last_update": "-", "last_update_ts": "1627351812", "name": "CTF - 代码审计向", "url": "/help/CTF-Code-Audit-WalkThrough/" }, { "status": "success", "last_update": "-", "last_update_ts": "1626937631", "name": "ModSec & CloudFlare WAF Initial Research", "url": "/help/WAF-developed-by-Grayscale-forwarding/" }, { "status": "success", "last_update": "-", "last_update_ts": "1626403441", "name": "Router-BinFile-Analysis", "url": "/help/Router-BinFile-Analysis/" }, { "status": "success", "last_update": "-", "last_update_ts": "1625037975", "name": "JRMP-Gadget", "url": "/help/JRMP-Gadget/" }, { "status": "success", "last_update": "-", "last_update_ts": "1622792669", "name": "ATT&CK - 基于 scylla 的访问代理池", "url": "/help/Thousand-people-Thousand-faces-Red-team-penetration-agent-pool-based-on-scylla/" }, { "status": "success", "last_update": "-", "last_update_ts": "1624952604", "name": "Hikvision-ConfigurationFiles-decrypter", "url": "/help/Hikvision-ConfigurationFiles-decrypter/" }, { "status": "success", "last_update": "-", "last_update_ts": "1623829395", "name": "polkit-CVE-2021-3560", "url": "/help/polkit-CVE-2021-3560/" }, { "status": "success", "last_update": "-", "last_update_ts": "1591517973", "name": "javaDeser", "url": "/help/javaDeser" }, { "status": "success", "last_update": "-", "last_update_ts": "1626919902", "name": "通达OA利用代码分析", "url": "/help/ToDa-OA-VulnPoc-by-java-analysis/" }, { "status": "success", "last_update": "-", "last_update_ts": "1621609682", "name": "浪潮ClusterEngineV4.0代码审计历程", "url": "/help/inspur-Cluster-Engine-V4.0-code-aduit-walkthrough/" }, { "status": "success", "last_update": "2021-02-05 16:21:45 +0800", "last_update_ts": "1609697421", "name": "ShiroDeser", "url": "/help/ShiroDeser/" }, { "status": "success", "last_update": "2021-02-05 12:37:56 +0800", "last_update_ts": "1604716401", "name": "Struts2Deser", "desc": "Struts2反序列化远程代码执行", "url": "/help/Struts2Deser/" }, { "status": "success", "last_update": "-", "last_update_ts": "1606194681", "name": "SpringBoot-Memory-files-heapdump-Analysis", "url": "/help/SpringBoot-Memory-files-heapdump-Analysis/" }, { "status": "success", "last_update": "-", "last_update_ts": "1609319481", "name": "Dynamic-analysis-of-java-framework-code", "url": "/help/Dynamic-analysis-of-java-framework-code/" }, { "status": "success", "last_update": "-", "last_update_ts": "1610242941", "name": "Mod-Waf-Bypass-Walkthrough", "url": "/help/Mod-Waf-Bypass-Walkthrough/" }, { "status": "success", "last_update": "-", "last_update_ts": "1603963333", "name": "SQL注入原理分析", "url": "/help/ALL-SQL-INJECTION-ANALYSIS/" }, { "status": "success", "last_update": "-", "last_update_ts": "1615357689", "name": "基于内存的Shiro框架Webshell攻击研究", "url": "/help/Research-on-Webshell-Attack-of-Shiro-Framework-Based-on-Memory/" }, { "status": "success", "last_update": "-", "last_update_ts": "1603963333", "name": "安全与开发之：Maven构建排错", "url": "/help/ALL-mvn-build-errors/" }], "force_redirect_help_mirrors": [null], "force_show_help_mirrors": [null], "label_map": { "unknown": "label-default", "syncing": "label-info", "success": "label-success", "fail": "label-warning", "failed": "label-warning", "paused": "label-warning" } },
		"helps": [{ "url": "/help/CTF-Crypto-and-Misc-etc-WalkThrough/", "mirrorid": "CTF - 密码学与杂项" }, { "url": "/help/CTF-Code-Audit-WalkThrough/", "mirrorid": "CTF - 代码审计向" }, { "url": "/help/WAF-developed-by-Grayscale-forwarding/", "mirrorid": "ModSec & CloudFlare WAF Initial Research" }, { "url": "/help/Router-BinFile-Analysis/", "mirrorid": "Router-BinFile-Analysis" }, { "url": "/help/JRMP-Gadget/", "mirrorid": "JRMP-Gadget" }, { "url": "/help/Hikvision-ConfigurationFiles-decrypter/", "mirrorid": "Hikvision-ConfigurationFiles-decrypter" }, { "url": "/help/polkit-CVE-2021-3560/", "mirrorid": "polkit-CVE-2021-3560" }, { "url": "/help/Thousand-people-Thousand-faces-Red-team-penetration-agent-pool-based-on-scylla/", "mirrorid": "ATT&CK - 基于 scylla 的访问代理池" }, { "url": "/help/inspur-Cluster-Engine-V4.0-code-aduit-walkthrough/", "mirrorid": "浪潮ClusterEngineV4.0代码审计历程" }, { "url": "/help/ToDa-OA-VulnPoc-by-java-analysis/", "mirrorid": "通达OA利用代码分析" }, { "url": "/help/Research-on-Webshell-Attack-of-Shiro-Framework-Based-on-Memory/", "mirrorid": "基于内存的Shiro框架Webshell攻击研究" }, { "url": "/help/ALL-mvn-build-errors/", "mirrorid": "安全与开发之：Maven构建排错" }, { "url": "/help/Mod-Waf-Bypass-Walkthrough/", "mirrorid": "Mod-Waf-Bypass-Walkthrough" }, { "url": "/help/Dynamic-analysis-of-java-framework-code/", "mirrorid": "Dynamic-analysis-of-java-framework-code" }, { "url": "/help/SpringBoot-Memory-files-heapdump-Analysis/", "mirrorid": "SpringBoot-Memory-files-heapdump-Analysis" }, { "url": "/help/Struts2Deser/", "mirrorid": "Struts2Deser" }, { "url": "/help/ALL-SQL-INJECTION-ANALYSIS/", "mirrorid": "SQL注入原理分析" }, { "url": "/help/javaDeser/", "mirrorid": "javaDeser" }, { "url": "/help/ShiroDeser/", "mirrorid": "ShiroDeser" }]
	};
	var label_map = global_options.options.label_map;
	var help_url = {};
	global_options.helps.forEach(function (h) {
		return help_url[h.mirrorid] = h.url;
	});
	var new_mirrors = {};
	global_options.options.new_mirrors.forEach(function (m) {
		return new_mirrors[m] = true;
	});
	var unlisted = global_options.options.unlisted_mirrors;
	var options = {};
	global_options.options.force_redirect_help_mirrors.forEach(function (m) {
		return options[m] = { 'url': "/help/" + m + "/" };
	});
	var descriptions = {};
	global_options.options.mirror_desc.forEach(function (m) {
		return descriptions[m.name] = m.desc;
	});

	new Vue({
		el: "#upgrade-mask"
	});

	var vmMirList = new Vue({
		el: "#mirror-list",
		data: {
			test: "hello",
			mirrorList: [],
			filter: "",
			rawMirrorList: [],
			dateTooltip: localStorage.getItem('DateTooltip') !== 'false'
		},
		created: function created() {
			this.refreshMirrorList();
		},
		updated: function updated() {
			$('.mirror-item-label').popover();
		},
		computed: {
			nowBrowsingMirror: function nowBrowsingMirror() {
				var mirrorName = location.pathname.split('/')[1];
				if (!mirrorName) {
					return false;
				}
				mirrorName = mirrorName.toLowerCase();
				var result = this.mirrorList.filter(function (m) {
					return m.name.toLowerCase() === mirrorName;
				})[0];
				if (!result) {
					return false;
				}
				return result;
			},
			filteredMirrorList: function filteredMirrorList() {
				var filter = this.filter.toLowerCase();
				return this.mirrorList.filter(function (m) {
					return m.is_master && m.name.toLowerCase().indexOf(filter) !== -1;
				});
			}
		},
		methods: {
			getURL: function getURL(mir) {
				if (mir.url !== undefined) {
					return mir.url;
				}
				return "/" + mir.name + "/";
			},
			refreshMirrorList: function refreshMirrorList() {
				var self = this;
				$.getJSON("/static/tunasync.json", function (status_data) {
					var unlisted_mir = unlisted.map(function (d) {
						return processMirrorItem(d);
					});
					status_data = status_data.map(function (d) {
						return processMirrorItem(d);
					});
					var mir_data = $.merge(unlisted_mir, status_data);
					mir_data = processLinkItem(mir_data);
					status_data = sortAndUniqMirrors(status_data);
					mir_data = sortAndUniqMirrors(mir_data).filter(function (d) {
						return !(d.status == "disabled");
					});
					self.mirrorList = mir_data;
					self.rawMirrorList = status_data;
					setTimeout(function () {
						self.refreshMirrorList();
					}, 10000);
				});
			}
		}
	});

	var stringifyTime = function stringifyTime(ts) {
		var date = new Date(ts * 1000);
		var str = "";
		var ago = "";
		if (date.getFullYear() > 2000) {
			str = ('000' + date.getFullYear()).substr(-4) + "-" + ('0' + (date.getMonth() + 1)).substr(-2) + "-" + ('0' + date.getDate()).substr(-2) + (" " + ('0' + date.getHours()).substr(-2) + ":" + ('0' + date.getMinutes()).substr(-2));
			ago = timeago.format(date);
		} else {
			str = "0000-00-00 00:00";
			ago = "Never";
		}
		return [str, ago];
	};

	var sortAndUniqMirrors = function sortAndUniqMirrors(mirs) {
		mirs.sort(function (a, b) {
			return a.name < b.name ? -1 : 1;
		});
		return mirs.reduce(function (acc, cur) {
			if (acc.length > 1 && acc[acc.length - 1].name == cur.name) {
				if (acc[acc.length - 1].last_update_ts && cur.last_update_ts) {
					if (acc[acc.length - 1].last_update_ts < cur.last_update_ts) {
						acc[acc.length - 1] = cur;
					}
				} else if (cur.last_update_ts) {
					acc[acc.length - 1] = cur;
				}
			} else {
				acc.push(cur);
			}
			return acc;
		}, []);
	};

	var processLinkItem = function processLinkItem(mirrors) {
		var processed = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = mirrors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var d = _step.value;

				if (d.link_to === undefined) {
					processed.push(d);
					continue;
				}
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = mirrors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var target = _step2.value;

						if (d.link_to === target.name) {
							d.status = target.status;
							d.label = target.label;
							d.upstream = target.upstream;
							d.show_status = target.show_status;
							d.last_update = target.last_update;
							d.last_update_ago = target.last_update_ago;
							d.last_ended = target.last_ended;
							d.last_ended_ago = target.last_ended_ago;
							d.last_schedule = target.last_schedule;
							d.last_schedule_ago = target.last_schedule_ago;
							processed.push(d);
							break;
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return processed;
	};

	var processMirrorItem = function processMirrorItem(d) {
		if (options[d.name] != undefined) {
			d = $.extend(d, options[d.name]);
		}
		d.help_url = help_url[d.name];
		d.is_new = new_mirrors[d.name];
		d.description = descriptions[d.name];
		if (d.is_master === undefined) {
			d.is_master = true;
		}
		if (d.link_to !== undefined) {
			return d;
		}
		d.label = label_map[d.status];
		d.show_status = d.status != "success";
		// Strip the second component of last_update

		var _stringifyTime = stringifyTime(d.last_update_ts);

		var _stringifyTime2 = _slicedToArray(_stringifyTime, 2);

		d.last_update = _stringifyTime2[0];
		d.last_update_ago = _stringifyTime2[1];

		var _stringifyTime3 = stringifyTime(d.last_ended_ts);

		var _stringifyTime32 = _slicedToArray(_stringifyTime3, 2);

		d.last_ended = _stringifyTime32[0];
		d.last_ended_ago = _stringifyTime32[1];

		var _stringifyTime4 = stringifyTime(d.last_started_ts);

		var _stringifyTime42 = _slicedToArray(_stringifyTime4, 2);

		d.last_started = _stringifyTime42[0];
		d.last_started_ago = _stringifyTime42[1];

		var _stringifyTime5 = stringifyTime(d.next_schedule_ts);

		var _stringifyTime52 = _slicedToArray(_stringifyTime5, 2);

		d.next_schedule = _stringifyTime52[0];
		d.next_schedule_ago = _stringifyTime52[1];

		return d;
	};

	var vmIso = new Vue({
		el: "#isoModal",
		data: {
			distroList: [],
			selected: {},
			curCategory: "os"
		},

		computed: {
			curDistroList: function curDistroList() {
				var _this = this;

				return this.distroList.filter(function (x) {
					return x.category === _this.curCategory;
				}).sort(function (a, b) {
					return a.distro.localeCompare(b.distro);
				});
			}
		},
		methods: {
			showCategory: function showCategory(category) {
				return this.distroList.findIndex(function (x) {
					return x.category === category;
				}) > -1;
			},
			switchDistro: function switchDistro(distro) {
				this.selected = distro;
			},
			switchCategory: function switchCategory(category) {
				this.curCategory = category;
				this.selected = this.curDistroList[0];
			}
		}
	});
});

// vim: ts=2 sts=2 sw=2 noexpandtab
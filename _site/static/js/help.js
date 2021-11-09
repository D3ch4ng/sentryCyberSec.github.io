"use strict";

var globalOptions = ({
	"options": { "mirror_desc": [{ "name": "Struts2Deser", "desc": "Struts2反序列化远程代码执行" }, { "name": "ShiroDeser", "desc": "Shiro反序列化远程代码执行" }, { "name": "SpringBoot-Memory-files-heapdump-Analysis", "desc": "SpringBoot内存文件泄漏与分析" }, { "name": "Dynamic-analysis-of-java-framework-code", "desc": "关于java框架代码动态调试的理解" }, { "name": "Mod-Waf-Bypass-Walkthrough", "desc": "老牌Waf绕过历程" }, { "name": "SQL注入原理分析", "desc": "不同数据库注入案例原理分析" }, { "name": "基于内存的Shiro框架Webshell攻击研究", "desc": "基于内存的Shiro框架Webshell攻击研究" }, { "name": "安全与开发之：Maven构建排错", "desc": "ALL-Maven构建报错排错记录" }, { "name": "通达OA利用代码分析", "desc": "ToDa-OA-VulnPoc-by-java-analysis" }, { "name": "浪潮ClusterEngineV4.0代码审计历程", "desc": "CNVD-2021-39845历程" }, { "name": "ATT&CK - 基于 scylla 的访问代理池", "desc": "红队渗透：实现burp代理池转发xray被动扫描" }, { "name": "javaDeser", "desc": "JAVA的序列化与反序列化分析" }, { "name": "polkit-CVE-2021-3560", "desc": "polkit关于CVE-2021-3560的分析" }, { "name": "Hikvision-ConfigurationFiles-decrypter", "desc": "Hikvision固件文件解密与分析" }, { "name": "JRMP-Gadget", "desc": "Stay Hungry, Stay Foolish." }, { "name": "Router-BinFile-Analysis", "desc": "Router BinFile固件分析" }, { "name": "ModSec & CloudFlare WAF Initial Research", "desc": "WAF开发研究初探" }, { "name": "CTF - 代码审计向", "desc": "CTF中代码题相关总结" }, { "name": "CTF - 密码学与杂项", "desc": "CTF中密码学与杂项相关总结" }], "new_mirrors": ["浪潮ClusterEngineV4.0代码审计历程", "通达OA利用代码分析", "ATT&CK - 基于 scylla 的访问代理池", "polkit-CVE-2021-3560", "Hikvision-ConfigurationFiles-decrypter", "JRMP-Gadget", "Router-BinFile-Analysis", "ModSec & CloudFlare WAF Initial Research", "CTF - 密码学与杂项", "CTF - 代码审计向"], "unlisted_mirrors": [{ "status": "success", "last_update": "-", "last_update_ts": "1628213613", "name": "CTF - 密码学与杂项", "url": "/help/CTF-Crypto-and-Misc-etc-WalkThrough/" }, { "status": "success", "last_update": "-", "last_update_ts": "1627351812", "name": "CTF - 代码审计向", "url": "/help/CTF-Code-Audit-WalkThrough/" }, { "status": "success", "last_update": "-", "last_update_ts": "1626937631", "name": "ModSec & CloudFlare WAF Initial Research", "url": "/help/WAF-developed-by-Grayscale-forwarding/" }, { "status": "success", "last_update": "-", "last_update_ts": "1626403441", "name": "Router-BinFile-Analysis", "url": "/help/Router-BinFile-Analysis/" }, { "status": "success", "last_update": "-", "last_update_ts": "1625037975", "name": "JRMP-Gadget", "url": "/help/JRMP-Gadget/" }, { "status": "success", "last_update": "-", "last_update_ts": "1622792669", "name": "ATT&CK - 基于 scylla 的访问代理池", "url": "/help/Thousand-people-Thousand-faces-Red-team-penetration-agent-pool-based-on-scylla/" }, { "status": "success", "last_update": "-", "last_update_ts": "1624952604", "name": "Hikvision-ConfigurationFiles-decrypter", "url": "/help/Hikvision-ConfigurationFiles-decrypter/" }, { "status": "success", "last_update": "-", "last_update_ts": "1623829395", "name": "polkit-CVE-2021-3560", "url": "/help/polkit-CVE-2021-3560/" }, { "status": "success", "last_update": "-", "last_update_ts": "1591517973", "name": "javaDeser", "url": "/help/javaDeser" }, { "status": "success", "last_update": "-", "last_update_ts": "1626919902", "name": "通达OA利用代码分析", "url": "/help/ToDa-OA-VulnPoc-by-java-analysis/" }, { "status": "success", "last_update": "-", "last_update_ts": "1621609682", "name": "浪潮ClusterEngineV4.0代码审计历程", "url": "/help/inspur-Cluster-Engine-V4.0-code-aduit-walkthrough/" }, { "status": "success", "last_update": "2021-02-05 16:21:45 +0800", "last_update_ts": "1609697421", "name": "ShiroDeser", "url": "/help/ShiroDeser/" }, { "status": "success", "last_update": "2021-02-05 12:37:56 +0800", "last_update_ts": "1604716401", "name": "Struts2Deser", "desc": "Struts2反序列化远程代码执行", "url": "/help/Struts2Deser/" }, { "status": "success", "last_update": "-", "last_update_ts": "1606194681", "name": "SpringBoot-Memory-files-heapdump-Analysis", "url": "/help/SpringBoot-Memory-files-heapdump-Analysis/" }, { "status": "success", "last_update": "-", "last_update_ts": "1609319481", "name": "Dynamic-analysis-of-java-framework-code", "url": "/help/Dynamic-analysis-of-java-framework-code/" }, { "status": "success", "last_update": "-", "last_update_ts": "1610242941", "name": "Mod-Waf-Bypass-Walkthrough", "url": "/help/Mod-Waf-Bypass-Walkthrough/" }, { "status": "success", "last_update": "-", "last_update_ts": "1603963333", "name": "SQL注入原理分析", "url": "/help/ALL-SQL-INJECTION-ANALYSIS/" }, { "status": "success", "last_update": "-", "last_update_ts": "1615357689", "name": "基于内存的Shiro框架Webshell攻击研究", "url": "/help/Research-on-Webshell-Attack-of-Shiro-Framework-Based-on-Memory/" }, { "status": "success", "last_update": "-", "last_update_ts": "1603963333", "name": "安全与开发之：Maven构建排错", "url": "/help/ALL-mvn-build-errors/" }], "force_redirect_help_mirrors": [null], "force_show_help_mirrors": [null], "label_map": { "unknown": "label-default", "syncing": "label-info", "success": "label-success", "fail": "label-warning", "failed": "label-warning", "paused": "label-warning" } },
	"helps": [{ "url": "/help/CTF-Crypto-and-Misc-etc-WalkThrough/", "mirrorid": "CTF - 密码学与杂项" }, { "url": "/help/CTF-Code-Audit-WalkThrough/", "mirrorid": "CTF - 代码审计向" }, { "url": "/help/WAF-developed-by-Grayscale-forwarding/", "mirrorid": "ModSec & CloudFlare WAF Initial Research" }, { "url": "/help/Router-BinFile-Analysis/", "mirrorid": "Router-BinFile-Analysis" }, { "url": "/help/JRMP-Gadget/", "mirrorid": "JRMP-Gadget" }, { "url": "/help/Hikvision-ConfigurationFiles-decrypter/", "mirrorid": "Hikvision-ConfigurationFiles-decrypter" }, { "url": "/help/polkit-CVE-2021-3560/", "mirrorid": "polkit-CVE-2021-3560" }, { "url": "/help/Thousand-people-Thousand-faces-Red-team-penetration-agent-pool-based-on-scylla/", "mirrorid": "ATT&CK - 基于 scylla 的访问代理池" }, { "url": "/help/inspur-Cluster-Engine-V4.0-code-aduit-walkthrough/", "mirrorid": "浪潮ClusterEngineV4.0代码审计历程" }, { "url": "/help/ToDa-OA-VulnPoc-by-java-analysis/", "mirrorid": "通达OA利用代码分析" }, { "url": "/help/Research-on-Webshell-Attack-of-Shiro-Framework-Based-on-Memory/", "mirrorid": "基于内存的Shiro框架Webshell攻击研究" }, { "url": "/help/ALL-mvn-build-errors/", "mirrorid": "安全与开发之：Maven构建排错" }, { "url": "/help/Mod-Waf-Bypass-Walkthrough/", "mirrorid": "Mod-Waf-Bypass-Walkthrough" }, { "url": "/help/Dynamic-analysis-of-java-framework-code/", "mirrorid": "Dynamic-analysis-of-java-framework-code" }, { "url": "/help/SpringBoot-Memory-files-heapdump-Analysis/", "mirrorid": "SpringBoot-Memory-files-heapdump-Analysis" }, { "url": "/help/Struts2Deser/", "mirrorid": "Struts2Deser" }, { "url": "/help/ALL-SQL-INJECTION-ANALYSIS/", "mirrorid": "SQL注入原理分析" }, { "url": "/help/javaDeser/", "mirrorid": "javaDeser" }, { "url": "/help/ShiroDeser/", "mirrorid": "ShiroDeser" }]
}).options;

$(document).ready(function () {
	$("#help-content").find('table').addClass("table table-bordered table-striped");

	var update_apt_file = function update_apt_file(ev) {
		var sel = $(ev.target),
		    os_name = sel.find("option:selected").data('os'),
		    release_name = sel.find("option:selected").data('release'),
		    release_security = sel.find("option:selected").data('security'),
		    opt = sel.find('option:selected').data('opt'),
		    tmpl_selector = sel.data("template"),
		    target_selector = sel.data("target"),
		    apt_template = $.trim($(tmpl_selector).text()),
		    tmpl_data = $.extend({}, {
			os_name: os_name,
			release_name: release_name,
			release_security: release_security
		}, opt),
		    apt_content = Mark.up(apt_template, tmpl_data);
		$(target_selector).html(apt_content);
	};

	$("select.release-select").on('change', update_apt_file);
	$("select.release-select").each(function (i, e) {
		$(e).trigger('change');
	});

	$('#help-select').on('change', function (ev) {
		var help_url = $(ev.target).find("option:selected").data('help-url');
		window.location = window.location.protocol + "//" + window.location.host + help_url;
	});

	$.getJSON("/static/tunasync.json", function (statusData) {
		// remove help items for disabled/removed mirrors
		var availableMirrorIds = new Set(statusData.map(function (x) {
			return x.name;
		}));
		globalOptions.unlisted_mirrors.forEach(function (elem) {
			availableMirrorIds.add(elem.name);
		});
		globalOptions.force_show_help_mirrors.forEach(function (elem) {
			availableMirrorIds.add(elem);
		});
		console.log(window.mirrorId);
		if (!availableMirrorIds.has(window.mirrorId)) {
			location.href = "/404-help-hidden.html"; // this will break 404 issue submission
		}

		$('li').filter(function (_, node) {
			return node.id && node.id.startsWith("toc-") && !availableMirrorIds.has(node.id.slice(4));
		}).remove();
		$('option').filter(function (_, node) {
			return node.id && node.id.startsWith("toc-") && !availableMirrorIds.has(node.id.slice(4));
		}).remove();
	});
});

$(function () {
	$("img").lazyload({
		effect: "fadeIn"
	});
	$(".lazy").lazyload({
		effect: "fadeIn"
	});
});
$(".article-index").sticky({
	topSpacing: 10
});

$(document).scroll(function () {

	/* class: article-index :page.toc
  * while window scroll to buttom then disappear; else display article's toc;
  */
	var nav = $(".article-index");
	if ($(document).scrollTop() * 1.18 > $(document).height()) {
		/*addclass to remove sticky article index*/
		nav.addClass("navbar-hide");
		//console.log($(document).scrollTop(),"compare with:",$(document).height())
		//console.log("here is remove sticky article index!",$(document).scrollTop() * 1.18)
	} else {
			/*else to exchange.*/
			nav.removeClass("navbar-hide");
			//console.log($(document).scrollTop(),"compare with:",$(document).height())
			//console.log("show article index")
		}
});

// vim: ts=2 sts=2 sw=2 noexpandtab
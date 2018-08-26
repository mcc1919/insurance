module.exports = {
	RandomName:RandomName,
	Random_type:Random_type,
	RandomNumber:RandomNumber,
	Randomphone:Randomphone,
	Nowdate:Nowdate,
	nowMonth:nowMonth
}
var XINGSHI = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '楮', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜',
	'戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '澹台',
	'公冶', '宗政', '濮阳', '淳于', '单于', '太叔', '申屠', '公孙', '仲孙', '轩辕', '令狐', '锺离', '宇文', '长孙', '慕容', '鲜于', '闾丘',
	'司徒', '司空', '丌官', '司寇', '子车', '微生', '万俟', '司马', '上官', '欧阳', '夏侯', '诸葛', '闻人', '东方', '赫连', '皇甫', '尉迟', '公羊',
	'颛孙', '端木', '巫马', '公西', '漆雕', '乐正', '壤驷', '公良', '拓拔', '夹谷', '宰父', '谷梁', '段干', '百里', '东郭', '南门', '呼延', '羊舌', '梁丘', '左丘', '东门', '西门', '南宫'
];
var NAME = ['子璇', '淼', '国栋', '夫子', '瑞堂', '甜', '敏', '尚', '国贤', '贺祥', '晨涛', '昊轩', '易轩', '益辰', '益帆', '益冉', '瑾春', '瑾昆', '春齐', '杨', '文昊',
	'东东', '雄霖', '浩晨', '熙涵', '溶溶', '冰枫', '欣欣', '宜豪', '欣慧', '建政', '美欣', '淑慧', '文轩', '文杰', '欣源', '忠林', '榕润', '欣汝', '慧嘉', '新建',
	'涵越', '润丽', '翔', '淑华', '晶莹', '凌晶', '苒溪', '雨涵', '嘉怡', '佳毅', '子辰', '佳琪', '紫轩', '瑞辰', '昕蕊', '萌', '明远', '欣宜', '泽远', '欣怡',
	'佳怡', '佳惠', '晨茜', '晨璐', '运昊', '汝鑫', '淑君', '晶滢', '润莎', '榕汕', '佳钰', '佳玉', '晓庆', '一鸣', '语晨', '添池', '添昊', '雨泽', '雅晗', '雅涵',
	'清妍', '诗悦', '璐瑶', '嘉乐', '晨涵', '天赫', '客心', '玥傲', '佳昊', '天昊', '萌萌', '若萌', '建林', '亦菲', '林', '冰洁', '佳欣', '涵涵', '禹辰', '淳美', '泽惠', '伟洋', '路遥'
];
function RandomName() {
	return String(XINGSHI[Math.floor(Math.random() * XINGSHI.length)] + NAME[Math.floor(Math.random() * NAME.length)]);
	}
function Random_type(digs) {
	return Math.round(Math.random() * digs)
}
//随机位数数字
function RandomNumber(digits) {
	return String(Math.random() * Math.pow(10, digits)).slice(-1 * digits);
}
//随机手机号
function Randomphone() {
	var i = ['13', '14', '15', '16', '17', '18', '19']
	var y = String(i[Math.floor(Math.random() * i.length)])
	var z = y + RandomNumber(4) + RandomNumber(5)
	return z
}
function Nowdate() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var day = d.getDate()+2;
	return String(year + '-' + (month > 9 ? '' : '0') + month + '-' + (day > 9 ? '' : '0') + day);
}
function nowMonth() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var day = d.getDate() + 4;
	return String(year + '-' + (month > 9 ? '' : '0') + month + '-' + (day > 9 ? '' : '0') + day);
}
function drawSector(ctx, centerX, centerY, startAngle, endAngle, innerRadius, outerRadius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
    ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fill();
}

function drawArrow(ctx, centerX, centerY, startAngle, endAngle, outerRadius, color) {
    var headlen = 15; // 箭头头部的长度
    var angle = (startAngle + endAngle) / 2; // 箭头中心的角度
    var x = centerX + outerRadius * Math.cos(angle);
    var y = centerY + outerRadius * Math.sin(angle);

    // 绘制箭头
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - headlen * Math.cos(angle - Math.PI / 7), y - headlen * Math.sin(angle - Math.PI / 7));
    ctx.lineTo(x - headlen * Math.cos(angle + Math.PI / 7), y - headlen * Math.sin(angle + Math.PI / 7));
    ctx.closePath();
    ctx.fill();
}

function drawText(ctx, text, x, y) {
    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y);
}

function drawText_OMO(ctx, text, x, y) {
    ctx.fillStyle = 'black';
    ctx.font = '26px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y);
}

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var innerRadius = 70;
var outerRadius = 120;
var angles = [1/6 * Math.PI, 5/6 * Math.PI, 3/2 * Math.PI, 13/6 * Math.PI];
var colors = ['#FFD700', '#1E90FF', '#32CD32', '#FF4500'];
var texts = ['复习', '预习', '学习与教育'];
// var gradient = ctx.createLinearGradient(0, 0, 200, 0);
// gradient.addColorStop(0, 'red');
// gradient.addColorStop(0.5, 'orange');
// gradient.addColorStop(1, 'yellow');

// 绘制3个扇形和箭头
for (var i = 0; i < 3; i++) {
    drawSector(ctx, centerX, centerY, angles[i], angles[i + 1], innerRadius, outerRadius, colors[i]);
    drawArrow(ctx, centerX, centerY, angles[i], angles[i + 1], outerRadius - 10, "black");
}

// 添加中间的文本
drawText_OMO(ctx, 'OMO', centerX, centerY - 10);
drawText_OMO(ctx, '模式', centerX, centerY + 20);

// 绘制四周的文本
texts.forEach(function(text, index) {
    var angle = angles[index] + Math.PI / 3
    var textRadius = outerRadius + 20; // 文本距离圆环的距离
    var textX = centerX + textRadius * Math.cos(angle);
    var textY = centerY + textRadius * Math.sin(angle) + 6; // 加6是为了调整文字垂直居中的偏移量
    drawText(ctx, text, textX, textY);
});
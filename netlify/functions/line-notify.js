const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const { message } = JSON.parse(event.body);

    const lineToken = 'p6B4JxmnBbP1YkcdS5TdmCC60x2pgj72Gw8rfmLs7KC';

    const response = await fetch('https://notify-api.line.me/api/notify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${lineToken}`,
        },
        body: `message=${message}`,
    });

    if (response.ok) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'รอ Admin อนุมัติ' }),
        };
    } else {
        return {
            statusCode: response.status,
            body: JSON.stringify({ message: 'เกิดข้อผิดพลาด' }),
        };
    }
};

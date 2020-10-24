function getShortMessages(messages) {
	return messages.filter(mensagens => mensagens.message.length < 50).map(msg => msg.message)
}

module.exports = getShortMessages
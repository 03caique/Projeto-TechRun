function updateScore(team, change) {
    const scoreElement = document.getElementById(`score${team}`);
    let currentScore = parseInt(scoreElement.innerText);
    currentScore += change;
    scoreElement.innerText = currentScore;
}

function finalizarJogo() {
    const scoreA = parseInt(document.getElementById('scoreA').innerText);
    const scoreB = parseInt(document.getElementById('scoreB').innerText);
    
    let message;
    if (scoreA > scoreB) {
        message = "🎉 Time Vermelho venceu! 🎉";
    } else if (scoreB > scoreA) {
        message = "🎉 Time Verde venceu! 🎉";
    } else {
        message = "🔄 Empate! 🔄";
    }

    document.getElementById('resultado').innerText = message;
    document.getElementById('modal').style.display = 'block'; // Mostra o modal
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none'; // Oculta o modal
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function resetScores() {
    document.getElementById('scoreA').innerText = '0';
    document.getElementById('scoreB').innerText = '0';
}

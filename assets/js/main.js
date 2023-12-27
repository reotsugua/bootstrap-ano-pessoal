console.log('funcionando')
document.addEventListener("DOMContentLoaded", function () {
    // Geração dos dias
    const daySelect = document.getElementById('validationDay');
    for (let i = 1; i <= 30; i++) {
        daySelect.options[daySelect.options.length] = new Option(i < 10 ? '0' + i : i, i);
    }

    // Geração dos meses
    const monthSelect = document.getElementById('validationMonday');
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    months.forEach((month, index) => {
        monthSelect.options[monthSelect.options.length] = new Option(month, index + 1);
    });

    // Geração dos anos
    const yearSelect = document.getElementById('validationYear');
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 120; year--) {
        yearSelect.options[yearSelect.options.length] = new Option(year, year);
    }

    const form = document.querySelector('.needs-validation');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity()) {
            const day = parseInt(document.getElementById('validationDay').value);
            const month = parseInt(document.getElementById('validationMonday').value);
            const year = parseInt(document.getElementById('validationYear').value);
            const personalYear = calculatePersonalYear(day, month, year);
            document.getElementById('personalYearResult').textContent = personalYear;

            // Atualizando o caminho da imagem para corresponder ao ano pessoal
            document.getElementById('personalYearImage').src =
                `assets/image/figure/numeros/${personalYear}.png`;


            document.getElementById('personalYearDescription').textContent =
                getPersonalYearDescription(personalYear);
            document.getElementById('personalLoveDescription').textContent =
                getPersonalLoveDescription(personalYear);
            document.getElementById('personalWorkDescription').textContent =
                getPersonalWorkDescription(personalYear);
            document.getElementById('personalHealthDescription').textContent =
                getPersonalHealthDescription(personalYear);
            new bootstrap.Modal(document.getElementById('staticBackdrop')).show();
        }

        form.classList.add('was-validated');
    });

    function calculatePersonalYear(day, month, year) {
        // Obter o aniversário da pessoa
        const birthday = new Date(year, month, day);
        const dataAtual = new Date();


        // Extrair dia, mês e ano do aniversário
        const birthdayDay = birthday.getDate();
        const birthdayMonth = birthday.getMonth();
        const birthdayYear = dataAtual.getFullYear();

        console.log(birthdayDay);
        console.log(birthdayMonth);
        console.log(birthdayYear);

        // Calcular a soma dos dígitos do aniversário
        const sum = Math.floor(birthdayDay / 10) + (birthdayDay % 10) +
            Math.floor(birthdayMonth / 10) + (birthdayMonth % 10) +
            Math.floor(birthdayYear / 1000) + Math.floor((birthdayYear % 1000) / 100) +
            Math.floor((birthdayYear % 100) / 10) + (birthdayYear % 10);

        console.log(sum);

        // Reduzir a soma para um dígito único
        let personalYear = sum;
        while (personalYear > 9) {
            personalYear = Math.floor(personalYear / 10) + (personalYear % 10);
        }

        return personalYear;
    }

    function getPersonalYearDescription(year) {
        const descriptions = {
            1: descriptionYear1,
            2: descriptionYear2,
            3: descriptionYear3,
            4: descriptionYear4,
            5: descriptionYear5,
            6: descriptionYear6,
            7: descriptionYear7,
            8: descriptionYear8,
            9: descriptionYear9,
        };
        return descriptions[year] || "Descrição não disponível para este ano.";
    }

    function getPersonalLoveDescription(year) {
        const descriptions = {
            1: descriptionLove1,
            2: descriptionLove2,
            3: descriptionLove3,
            4: descriptionLove4,
            5: descriptionLove5,
            6: descriptionLove6,
            7: descriptionLove7,
            8: descriptionLove8,
            9: descriptionLove9,
        };
        return descriptions[year] || "Descrição não disponível para este ano.";
    }

    function getPersonalWorkDescription(year) {
        const descriptions = {
            1: descriptionWork1,
            2: descriptionWork2,
            3: descriptionWork3,
            4: descriptionWork4,
            5: descriptionWork5,
            6: descriptionWork6,
            7: descriptionWork7,
            8: descriptionWork8,
            9: descriptionWork9,
        };
        return descriptions[year] || "Descrição não disponível para este ano.";
    }

    function getPersonalHealthDescription(year) {
        const descriptions = {
            1: descriptionHealth1,
            2: descriptionHealth2,
            3: descriptionHealth3,
            4: descriptionHealth4,
            5: descriptionHealth5,
            6: descriptionHealth6,
            7: descriptionHealth7,
            8: descriptionHealth8,
            9: descriptionHealth9,
        };
        return descriptions[year] || "Descrição não disponível para este ano.";
    }
});
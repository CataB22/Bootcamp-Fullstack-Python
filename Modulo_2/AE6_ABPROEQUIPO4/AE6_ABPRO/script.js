$(document).ready(function() {
    const ticketPrice = 10; // Precio por entrada en USD
    let selectedSeats = [];

    // Efecto slideUp en las tarjetas al pasar el mouse
    $('.card').hover(
        function() {
            $(this).stop().animate({ marginTop: '-10px' }, 200);
        },
        function() {
            $(this).stop().animate({ marginTop: '0px' }, 200);
        }
    );

    // Abrir modal de reserva
    $('.reserve-btn').click(function() {
        const movie = $(this).data('movie');
        $('#movieSelect').val(movie);
        generateSeatGrid();
        $('#reserveModal').modal('show').find('.modal-content').fadeIn(300);
    });

    // Generar cuadrícula de asientos
    function generateSeatGrid() {
        $('#seatGrid').empty();
        for (let i = 1; i <= 20; i++) {
            const isTaken = Math.random() > 0.8; // 20% de probabilidad de que el asiento esté ocupado
            const seat = $('<div>').addClass('seat').text(i);
            if (isTaken) {
                seat.addClass('taken');
            }
            $('#seatGrid').append(seat);
        }

        // Selección de asientos
        $('.seat:not(.taken)').click(function() {
            $(this).toggleClass('selected');
            selectedSeats = $('.seat.selected').map(function() {
                return $(this).text();
            }).get();
            $('#selectedSeats').text(selectedSeats.length);
            $(this).fadeToggle(200);
        });
    }

    // Enviar formulario de reserva
    $('#reserveForm').submit(function(e) {
        e.preventDefault();
        if (selectedSeats.length === 0 || !$('#timeSelect').val()) {
            alert('Por favor selecciona un horario y al menos un asiento.');
            return;
        }
        $('#reserveModal').modal('hide').find('.modal-content').fadeOut(300);
        $('#paymentModal').modal('show').find('.modal-content').fadeIn(300);
    });

    // Enviar formulario de pago (simulado)
    $('#paymentForm').submit(function(e) {
        e.preventDefault();
        const movie = $('#movieSelect').val();
        const time = $('#timeSelect').val();
        const total = selectedSeats.length * ticketPrice;

        $('#confirmMovie').text(movie);
        $('#confirmTime').text(time);
        $('#confirmSeats').text(selectedSeats.join(', '));
        $('#confirmTotal').text(`$${total}`);
        
        $('#paymentModal').modal('hide').find('.modal-content').fadeOut(300);
        $('#confirmationModal').modal('show').find('.modal-content').fadeIn(300);
        
        // Reiniciar selección
        selectedSeats = [];
        $('#selectedSeats').text('0');
        $('#reserveForm')[0].reset();
        $('#paymentForm')[0].reset();
    });
});
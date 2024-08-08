<script>
//  inject in css file ==========================================================
// .viewport-width {
//   position: fixed;
//   top: 80px;
//   left: 50%;
//   transform: translate(-50%, -0%);
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 150px;
//   background-color: #ffffff;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   z-index: 1000;
//   font-family: Arial, sans-serif;
//   flex-wrap: wrap;
//   z-index: 9999;
// }
// .viewport-width h1, .viewport-width p {
//   margin: 0;
//   padding: 0 10px;
//   font-weight: 700;
//   font-size: 22px;
//   color: red;

// }

        function createViewportWidthDiv() {
        
            var div = document.createElement('div');
            div.className = 'viewport-width';

        
            var heading = document.createElement('h1');
            heading.textContent = 'Ширина вьюпорта вашего телефона:';

          
            var widthParagraph = document.createElement('p');
            widthParagraph.id = 'width';

 
            div.appendChild(heading);
            div.appendChild(widthParagraph);

          
            document.body.appendChild(div);


            updateViewportWidth();


            window.addEventListener('resize', updateViewportWidth);
        }

        function updateViewportWidth() {
            var width = window.innerWidth;
            document.getElementById('width').textContent = width + 'px';
        }
        window.onload = createViewportWidthDiv;
    </script>

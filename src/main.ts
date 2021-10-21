import './style.css';
import header from './html/header.ts.html';
import roomDetails from './html/room-details-form.ts.html';
import footer from './html/footer.ts.html';

const app = document.querySelector<HTMLDivElement>('#app')!;

console.log('Header', header);

app.innerHTML = `
${header}
${roomDetails}
${footer}
`;

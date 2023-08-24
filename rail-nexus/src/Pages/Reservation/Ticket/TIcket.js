import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import TicketLayout from './TicketLayout';
import { Button, Row } from 'react-bootstrap';

const Ticket = () => {
  const ticketRef = useRef(null);

  const downloadTicket = () => {
    const ticketElement = ticketRef.current;

    if (ticketElement) {
      html2canvas(ticketElement).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
    
        // Calculate the scaling factor
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const scaleX = pdfWidth / imgWidth;
        const scaleY = pdfHeight / imgHeight;
        const scale = Math.min(scaleX, scaleY);
    
        // Add the scaled image to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth * scale, imgHeight * scale);
    
        pdf.save('ticket.pdf');
      });
    }
  };

  return (
    <div>
      <div ref={ticketRef}>
        <TicketLayout></TicketLayout>
        {/* ... other attributes */}
      </div>
      <Row className="justify-content-center mt-4">
  <Button onClick={downloadTicket} className="btn-sm-5" style={{width : '220px'}}>
    Download Ticket
  </Button>
</Row>
      {/* <button onClick={downloadTicket} className='btn btn-info align-center'>Download Ticket</button> */}
    </div>
  );
};

export default Ticket;

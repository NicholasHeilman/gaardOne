import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Button} from '@material-ui/core';
import { withRouter } from "react-router";
import QrTableRow from './QrTableRow';
import './PrintQr.css';

class QrTable extends Component {
   
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PRODUCT' });
    }
    
    confirmPrint=()=>{
        this.props.history.push('/PrintQr');
    }
   
    render() {
        const qrRowsUnprinted = this.props.reduxStore.product.filter((product)=>{
            return product.printed === false;
        })

        return (
        <div>
        <Button variant="contained" color={('#647c36')} className="exportPdfBtn" onClick={this.confirmPrint} >Export QR to PDF</Button>
        <br />

         <Paper>
             {/* {JSON.stringify(this.props.reduxStore.product)}; */}
             
             <Table>
                 <TableHead>
                     <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell>Square Feet</TableCell>
                        <TableCell>QR Printed</TableCell>
                        <TableCell>Qr Code</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                        {this.props.reduxStore.product.map((qrProduct,i)=>(
                        <QrTableRow key={i} qrproduct={qrProduct} />))}
                 </TableBody>
             </Table>
         </Paper>
         </div>
        );
    }
}
const mapReduxStoreToProps = reduxStore => ({ reduxStore });
export default withRouter(connect(mapReduxStoreToProps)(QrTable));
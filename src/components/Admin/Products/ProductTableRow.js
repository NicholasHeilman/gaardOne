import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import './ProductEditModal.css';
import ProductEditModal from './ProductEditModal';
import { TableRow, TableCell } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'





class ProductTableRow extends Component {

    state = {
        open: false,
    };

    handleDelete = (event) => {
        const action = { type: 'DELETE_PRODUCT_TYPE', payload: this.props.productTypeItem };
        this.props.dispatch(action);
    }

    handleEditOpen = () => {
        this.setState({
            open: true,
        });
        
    }

    handleEditClose = () => {
        this.setState({
            open: false,
        });
    }
    

    render() {
        return (
            <TableRow>
                <TableCell>
                    {this.props.productTypeItem.product_name}
                </TableCell>
                <TableCell>
                    {this.props.productTypeItem.cost}
                </TableCell>
                <TableCell>
                    {this.props.productTypeItem.description}
                </TableCell>
                <TableCell>
                    <Edit className="edit-product-type" onClick={this.handleEditOpen}>Edit</Edit>
                    <Modal open={this.state.open} onClose={this.handleEditClose} className="bg-modal">
                        <div className="modal-content">
                            <ProductEditModal handleEditClose={this.handleEditClose} id={this.props.productTypeItem.id} />
                        </div>

                    </Modal>
                </TableCell>
                <TableCell>
                    <Delete onClick={this.handleDelete}></Delete>
                </TableCell>
            </TableRow>
        )
    }
}

export default connect()(ProductTableRow);
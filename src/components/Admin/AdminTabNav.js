import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Allocated from './ManageQr/Allocated';
import Generate from './ManageQr/Generate';
import QrTable from './ManageQr/QrTable';
import ProductTable from './Products/ProductTable';
import ProductForm from './Products/ProductForm';
import AllocationStatChart from './AllocationStatChart/AllocationStatChart';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';


;

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
});

class AdminTabNav extends Component {
    pdfExportComponent;
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }
    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Manage QR" />
                        <Tab label="Manage Products" />
                        <Tab label="Allocation Stats (stretch)" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <Allocated />
                        <Generate />
                        <button onClick={this.exportPDFWithComponent}>
                            Export with component</button> 
                        <PDFExport ref={(component) => this.pdfExportComponent = component} 
                            pageTemplate={'../public/Printer Template/gsp_1inch_squares.pdf'}
                            paperSize={'Letter'}>
                        <QrTable />
                        </PDFExport>

                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <ProductForm />
                        <ProductTable />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                    <AllocationStatChart />
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AdminTabNav);
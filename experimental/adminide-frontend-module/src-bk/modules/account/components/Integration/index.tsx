import { compose, bindActionCreators } from 'redux';
import { IntegrationComponent } from './Integration';

import { unlink } from '@adminide-stack/user-auth0-browser';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => bindActionCreators({ unlink }, dispatch);

export default compose(
    connect(null, mapDispatchToProps) as any,
)(IntegrationComponent);

import * as React from 'react';
import { compose } from 'redux';
import { Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { RcBaseFormProps } from 'antd/lib/form/Form';

import { CollaboratorsComponent, ICollaborators } from './Collaborators';


export default compose(Form.create())(CollaboratorsComponent);

import * as React from 'react';
import * as PropTypes from 'prop-types';

const ErrImg = require('../../../../packages-modules/adminide-frontend-module/src/assets/images/ErrImg.png');
const ErrNotFound = require('../../../../packages-modules/adminide-frontend-module/src/assets/images/404 .png');

import { Button } from 'antd';

export default class PageNotFound extends React.Component<any, any> {
  constructor(context, props) {
    super(context, props);
  }

  public static contextTypes = {
    router: PropTypes.object.isRequired,
    renderer: PropTypes.object.isRequired,
  };
  public render() {
    const { renderer, router, fela } = this.context;
    return(
      <div className={renderer.renderRule(styles.main)}>
          <div className={renderer.renderRule(styles.main_img)}>
            <div className={renderer.renderRule(styles.main_error_section)}>
              <img src={ErrNotFound} alt="bg-err" className={renderer.renderRule(styles.err_404)} />
              <p className={renderer.renderRule(styles.p_text)}>The link you followed probably broken  or the page has been removed</p>
              <Button className={renderer.renderRule(styles.btn_return)}>RETURN TO HOMEPAGE</Button>
            </div>
            <div className={renderer.renderRule(styles.main_error_section_2)}>
              <img src={ErrImg} alt="bg-err" className={renderer.renderRule(styles.err_img)} />
            </div>
          </div>
      </div>
    );
  }
}

const styles = ({
  main_img: props => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  }),
  btn_return : props => ({
    width: '30%',
    background: 'transparent',
    margin: '0 auto',
    fontWeight: '600',
    border: '2px solid',
    color: '#5d58f7',
    marginTop: '20px',
  }),
  p_text : props => ({
    width: '56%',
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '19px',
    fontWeight: '600',
    color: '#5c6bc0',
  }),
  main_error_section : props => ({
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  }),
  main_error_section_2 : props => ({
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  }),
  main : props => ({
    backgroundColor: '#5d58f75c',
    height: '100vh',
  }),
  err_img : props => ({
    width: '60%',
    height: 'auto',
  }),
  err_404 : props => ({
    width: '60%',
    height: 'auto',
    margin: '0 auto',
  }),
});

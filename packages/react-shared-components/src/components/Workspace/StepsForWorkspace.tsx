// tslint:disable:jsx-wrap-multiline


import * as React from 'react';
import * as PropTypes from 'prop-types';
import { createRenderer } from 'fela';
const bgimage = require('./assets/images/bgRound.png');
const gifOne = require('./assets/images/icon1.png');
const giftwo = require('./assets/images/icon2.png');
const gifthree = require('./assets/images/icon3.png');
const Roundimg = require('./assets/images/round.png');
const first_1 = require('./assets/images/1.png');
const first_2 = require('./assets/images/2.png');
const first_3 = require('./assets/images/3.png');
const second_1 = require('./assets/images/10.png');
const second_2 = require('./assets/images/5.png');
const second_3 = require('./assets/images/11.png');
const second_4 = require('./assets/images/9.png');
const second_5 = require('./assets/images/4.png');
const third_1 = require('./assets/images/8.png');
const third_2 = require('./assets/images/7.png');
const third_3 = require('./assets/images/6.png');
const right = require('./assets/images/right.png');
const left_end = require('./assets/images/com-1.png');
const dashboard_1 = require('./assets/images/12.png');
const dashboard_2 = require('./assets/images/13.png');
const dashboard_3 = require('./assets/images/14.png');
const dashboard_4 = require('./assets/images/15.png');
const dashboard_5 = require('./assets/images/16.png');
const dashboard_6 = require('./assets/images/17.png');
const dashboard_7 = require('./assets/images/18.png');
const dashboard_8 = require('./assets/images/19.png');
const dashboard_9 = require('./assets/images/20.png');
const dashboard_10 = require('./assets/images/21.png');
const dashboard_11 = require('./assets/images/22.png');
const center_img = require('./assets/images/center.png');
const right_img = require('./assets/images/left.png');
const right_end = require('./assets/images/com-1.png');
const loadingGif = require('./assets/images/image3.gif');
import { Spin } from 'antd';

const renderer = createRenderer();
export interface PageState {
  isLoading: boolean;
}

export class StepsForWorkspace extends React.Component<any, PageState> {
  constructor(context, props) {
    super(context, props);
  }
  public state: PageState = {
    isLoading : true,
  };
  public static contextTypes = {
    router: PropTypes.object.isRequired,
    renderer: PropTypes.object.isRequired,
  };
  public componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading : false });
    }, 2000);
  }
  public render() {
    const { renderer } = this.context;
    const { isLoading } = this.state;
    renderer.renderKeyframe(keyframe as any, {} as any); // => k1
    renderer.renderKeyframe(() => ({
      '0%': { left: '100px' },
      '50%': { left: '190px' },
      '100%': { left: '100px'},
    }) as any, {} as any); // => k2
    renderer.renderKeyframe(() => ({
      '0%': { top: '80px' },
      '50%': { top: '170px' },
      '100%': { top: '80px'},
    }) as any, {} as any); // => k3
    renderer.renderKeyframe(() => ({
      '0%': { top: '280px' },
      '50%': { left: '330px' , top: '280px' },
      '100%': { top: '280px'},
    }) as any, {} as any); // => k4
    renderer.renderKeyframe(() => ({
      '0%': { top: '110px' },
      '50%': { top: '200px' },
      '100%': { top: '110px'},
    }) as any, {} as any); // => k5
    renderer.renderKeyframe(() => ({
      '0%': { top: '280px' },
      '50%': { top: '260px' , left : '330px' },
      '100%': { top: '280px'},
    }) as any, {} as any); // => k6
    renderer.renderKeyframe(() => ({
      '0%': { top: '180px' },
      '50%': { left: '310px' , top : '190px' },
      '100%': { top: '190px'},
    }) as any, {} as any); // => k7
    renderer.renderKeyframe(() => ({
      '0%': { top: '180px' },
      '50%': { left: '310px' , top : '190px' },
      '100%': { top: '190px'},
    }) as any, {} as any); // => k8
    renderer.renderKeyframe(() => ({
      '0%': { top: '180px' },
      '50%': { left: '310px' , top : '210px' },
      '100%': { top: '180px'},
    }) as any, {} as any); // => k9
    renderer.renderKeyframe(() => ({
      '0%': { top: '80px' },
      '50%': { left: '570px' , top : '80px' },
      '100%': { top: '80px'},
    }) as any, {} as any); // => k10
    renderer.renderKeyframe(() => ({
      '0%': { top: '140px' },
      '50%': { left: '580px' , top : '110px' },
      '100%': { top: '140px'},
    }) as any, {} as any); // => k11
    renderer.renderKeyframe(() => ({
      '0%': { top: '47px' },
      '50%': { left: '570px' , top : '47px' , transform: 'rotate(30deg)' },
      '100%': { top: '47px'},
    }) as any, {} as any); // => k12
    // renderer.renderKeyframe(newKeyframe);

    return (
      <div>
        {isLoading ?
          <div className={renderer.renderRule(styles.load_icon)}>
          <img src={loadingGif} alt="bg-round" className={renderer.renderRule(styles.spinner)} />
          </div>
          :
        (<div className={renderer.renderRule(styles.workspacePage.main_container)}>
          <div className={renderer.renderRule(styles.workspacePage.cde_base)}>
            <img src={bgimage} alt="bg-round" className={renderer.renderRule(styles.workspacePage.bg_round)}/>
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_1)}>
            <img src={gifOne} alt="1gif" className={renderer.renderRule(styles.workspacePage.gifOne_img)}/>
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_2)}>
            <img src={gifthree} alt="1gif" className={renderer.renderRule(styles.workspacePage.giftwo_img)}/>
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_3)}>
            <img src={giftwo} alt="1gif" className={renderer.renderRule(styles.workspacePage.gifthree_img)}/>
          </div>
          {/*-------------first gif-------------*/}
          <div className={renderer.renderRule(styles.workspacePage.gif_1_child)}>
            <div style={{ display: 'bLock' }}>
              <img src={first_1} style={{ width: '120px' }} alt="1" />
            </div>
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_1_child_2)}>
            <img src={first_2} alt="1" className={renderer.renderRule(styles.workspacePage.profile_icon_2)} />
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_1_child_3)}>
            <img src={first_3} alt="1" className={renderer.renderRule(styles.workspacePage.profile_icon_3)} />
          </div>
          {/*-------------End gif first gif-------------*/}
          {/*-------------second gif-------------*/}
          <div className={renderer.renderRule(styles.workspacePage.gif_2_child)}>
            <img src={second_1} alt="1" className={renderer.renderRule(styles.workspacePage.profile_icon_gif_2)} />
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_2_child_2)}>
            <img src={second_2} alt="1" className={renderer.renderRule(styles.workspacePage.profile_icon_2_gif_2)} />
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_2_child_3)}>
            <img src={second_3} alt="1" className={renderer.renderRule(styles.workspacePage.profile_icon_3_0)} />
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_2_child_4)}>
            <img src={second_4} alt="1" className={renderer.renderRule(styles.workspacePage.profile_icon_3_1)} />
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_2_child_5)}>
            <img src={second_5} alt="1" className={renderer.renderRule(styles.workspacePage.profile_icon_3_2)} />
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_2_child_5)}>
            <img src={second_5} alt="1" className={renderer.renderRule(styles.workspacePage.profile_icon_3_2)} />
          </div>
          {/*-------------3 gif first gif-------------*/}
          <div className={renderer.renderRule(styles.workspacePage.gif_3_child)}>
            <img src={third_1} alt="1" className={renderer.renderRule(styles.workspacePage.profile_icon_gif_3)} />
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_3_child_3)}>
            <img src={third_2} alt="1" className={renderer.renderRule(styles.workspacePage.profile_icon_2_gif_3)} />
          </div>
          <div className={renderer.renderRule(styles.workspacePage.gif_3_child_2)}>
            <img src={third_3} alt="1" className={renderer.renderRule(styles.workspacePage.profile_icon_3_gif_3)} />
          </div>
          {/*-------------End 3 gif-------------*/}
          <div className={renderer.renderRule(styles.workspacePage.left)}>
            <img src={right} alt="1" className={renderer.renderRule(styles.workspacePage.left_icon)} />
          </div>
          <div className={renderer.renderRule(styles.workspacePage.left_text)}>
            <img src={right} alt="1" className={renderer.renderRule(styles.workspacePage.left_icon_end)} />
            <p className={renderer.renderRule(styles.workspacePage.left_icon_text)}>01.Dashboard</p>
          </div>
          <img src={left_end} alt="1" className={renderer.renderRule(styles.workspacePage.left_dashboard)} />
          {/*dashboard*/}
          <div className={renderer.renderRule(styles.workspacePage.dashboard)}>
            <div className={renderer.renderRule(styles.workspacePage.one_block)}>
              <img src={dashboard_1} alt="12" className={renderer.renderRule(styles.workspacePage.dashboard_img)} />
              <p className={renderer.renderRule(styles.workspacePage.dashboard_text)}>Go to Dashboard </p>
            </div>
            <div className={renderer.renderRule(styles.workspacePage.one_block)}>
              <img src={dashboard_2} alt="13" className={renderer.renderRule(styles.workspacePage.dashboard_img)} />
              <p className={renderer.renderRule(styles.workspacePage.dashboard_text)}>Connect other Accounts</p>
            </div>
            <div className={renderer.renderRule(styles.workspacePage.one_block)}>
              <img src={dashboard_3} alt="14" className={renderer.renderRule(styles.workspacePage.dashboard_img)} />
              <p className={renderer.renderRule(styles.workspacePage.dashboard_text)}>Create Worksapce</p>
            </div>
          </div>
          {/*dashboard-2*/}
          <div className={renderer.renderRule(styles.workspacePage.center)}>
            <img src={center_img} alt="1" className={renderer.renderRule(styles.workspacePage.center_img)} />
            <p className={renderer.renderRule(styles.workspacePage.center_text)}>02.Add</p>
          </div>
          <img src={left_end} alt="1" className={renderer.renderRule(styles.workspacePage.left_end_icon)} />
          <div className={renderer.renderRule(styles.workspacePage.dashboard_2)}>
            <div className={renderer.renderRule(styles.workspacePage.one_block)}>
              <img src={dashboard_4} alt="15" className={renderer.renderRule(styles.workspacePage.dashboard_img)} />
              <p className={renderer.renderRule(styles.workspacePage.dashboard_text)}>Add-Project</p>
            </div>
            <div className={renderer.renderRule(styles.workspacePage.one_block)}>
              <img src={dashboard_5} alt="16" className={renderer.renderRule(styles.workspacePage.dashboard_img)} />
              <p className={renderer.renderRule(styles.workspacePage.dashboard_text)}>Add-Database</p>
            </div>
            <div className={renderer.renderRule(styles.workspacePage.one_block)}>
              <img src={dashboard_6} alt="17" className={renderer.renderRule(styles.workspacePage.dashboard_img)} />
              <p className={renderer.renderRule(styles.workspacePage.dashboard_text)}>Add-nginx</p>
            </div>
            <div className={renderer.renderRule(styles.workspacePage.one_block)}>
              <img src={dashboard_7} alt="18" className={renderer.renderRule(styles.workspacePage.dashboard_img)} />
              <p className={renderer.renderRule(styles.workspacePage.dashboard_text)}>Add-Git Project</p>
            </div>
            <div className={renderer.renderRule(styles.workspacePage.one_block)}>
              <img src={dashboard_8} alt="19" className={renderer.renderRule(styles.workspacePage.dashboard_img)} />
              <p className={renderer.renderRule(styles.workspacePage.dashboard_text)}>Add-Git Hub Project</p>
            </div>
          </div>
          {/*dashboard-3*/}
          <div className={renderer.renderRule(styles.workspacePage.right)}>
            <img src={right_img} alt="19" className={renderer.renderRule(styles.workspacePage.right_end)} />
            <p className={renderer.renderRule(styles.workspacePage.dashboard_p_text)}>03. Build to Build & Deploy</p>
          </div>
          <img src={right_end} alt="1" className={renderer.renderRule(styles.workspacePage.right_end_icon)} />
          <div className={renderer.renderRule(styles.workspacePage.dashboard_3)}>
            <div className={renderer.renderRule(styles.workspacePage.one_block)}>
              <img src={dashboard_9} alt="20" className={renderer.renderRule(styles.workspacePage.dashboard_img)} />
              <p className={renderer.renderRule(styles.workspacePage.dashboard_text)}>Build Project </p>
            </div>
            <div className={renderer.renderRule(styles.workspacePage.one_block)}>
              <img src={dashboard_10} alt="16" className={renderer.renderRule(styles.workspacePage.dashboard_img)} />
              <p className={renderer.renderRule(styles.workspacePage.dashboard_text)}>Push to Kubernetes</p>
            </div>
            <div className={renderer.renderRule(styles.workspacePage.one_block)}>
              <img src={dashboard_11} alt="22" className={renderer.renderRule(styles.workspacePage.dashboard_img)} />
              <p className={renderer.renderRule(styles.workspacePage.dashboard_text)}>Add Helm Chart</p>
            </div>
          </div>
        </div>)
        }
      </div>
    );
  }
}

const keyframe = props => ({
  '0%': { left: '90px' }, '50%': { left: '-32px' }, '100%': { left: '90px' }, ...props,
});
const styles = ({
  workspacePage: {
    main_container: props => ({
      position: 'relative',
      width: '768px',
      margin: '0 auto',
    }),
    bg_round: props => ({
      width: '100%',
    }),
    cde_base: props => ({
      position: 'relative',
    }),
    gifOne_img: props => ({
      backgroundImage: `url(${Roundimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '40px',
      height: '165px',
      width: 'auto',
      position: 'absolute',
      top: '18%',
      left: '7%',
      zIndex: '1',
    }),
    gif_1: props => ({}),
    gif_2: props => ({}),
    gif_3: props => ({}),
    gifthree_img: props => ({
      backgroundImage: `url(${Roundimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '40px',
      height: '165px',
      width: 'auto',
      position: 'absolute',
      top: '18%',
      right: '7%',
      zIndex: '1',
    }),
    giftwo_img: props => ({
      backgroundImage: `url(${Roundimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '165px',
      padding: '40px',
      width: 'auto',
      position: 'absolute',
      top: '58%',
      left: '39%',
      zIndex: '1',
    }),
    profile_icon: props => ({
      padding: '12px',
      height: '100px',
    }),
    gif_1_child: props => {
      return ({
        position: 'absolute',
        top: '25%',
        left: '-6%',
        animation: 'k1 2.7s infinite',
      });
    },
    gif_1_child_2: props => {
      return ({
        position: 'absolute',
        top: '20%',
        left: '24%',
        animation: 'k2 2.7s infinite',
      });
    },
    profile_icon_2: props => ({
      height: '80px',
    }),
    gif_1_child_3: props => {
      return({
        position: 'absolute',
        top: '50%',
        left: '15%',
        animation: 'k3 2.7s infinite',
      });
      },
    profile_icon_3: props => ({
      height: '124px',
    }),
    left_dashboard: props => ({
      width: '8px',
      marginLeft: '26%',
      top: '136%',
      right: '84%',
      position: 'absolute',
    }),
    left_text: props => {
      return({
        position: 'absolute',
        top: '127%',
        left: '6%',
      });
    },
    left_icon_end: props => ({
      width: '8px',
      marginLeft: '26%',
      top: '136%',
      right: '84%',
      position: 'absolute',
    }),
    // secound gif
    gif_2_child: props => {
      return ({
        position: 'absolute',
        top: '83%',
        left: '28.5%',
        animation: 'k4 2.7s infinite',
      });
    },
    profile_icon_gif_2: props => ({
       height: '80px',
    }),
    gif_2_child_2: props => {
      return ({
        position: 'absolute',
        top: '30%',
        left: '45%',
        animation: 'k5 2.7s infinite',
      });
    },
    profile_icon_2_gif_2: props => ({
      height: '124px',
    }),
    gif_2_child_3: props => {
      return ({
        position: 'absolute',
        top: '85%',
        left: '52.5%',
        animation: 'k6 2.7s infinite',
      });
    },
    profile_icon_3_0: props => ({
      height: '85px',
    }),
    gif_2_child_4: props => {
      return({
        position: 'absolute',
        top: '54%',
        left: '55.5%',
        animation: 'k7 2.7s infinite',
      });
    },
    profile_icon_3_1: props => ({
      height: '85px',
    }),
    gif_2_child_5: props => {
      return({
        position: 'absolute',
        top: '51%',
        left: '31%',
        animation: 'k8 2.7s infinite',
      });
    },
    profile_icon_3_2: props => ({
      height: '90px',
    }),
    // three gif
    gif_3_child: props => {
      return({
        position: 'absolute',
        top: '25%',
        left: '60%',
        animation: 'k9 2.7s infinite',
      });
    },
    profile_icon_gif_3: props => ({
      height: '75px',
    }),
    gif_3_child_3: props => {
      return ({
        position: 'absolute',
        top: '39%',
        left: '85.7%',
        animation: 'k10 2.7s infinite',
      });
    },
    profile_icon_2_gif_3: props => ({
      height: '90px',
    }),
    gif_3_child_2: props => {
      return ({
        position: 'absolute',
        top: '4%',
        left: '87.5%',
        animation: 'k11 2.7s infinite',
      });
    },
    profile_icon_3_gif_3: props => ({
      height: '95px',
    }),
    center_text: props => ({
      margin: '0',
      fontSize: '20px',
      padding_left: '25px',
      color: '#000',
      marginLeft: '20px',
    }),
    //third end
    left: props => ({
      position: 'absolute',
      top: '65%',
      left: '7%',
    }),
    left_icon: props => ({
      width: '50%',
    }),
    left_icon_text: props => ({
      fontSize: '20px',
      color: '#000',
    }),
    left_end_icon: props => ({
      width: '8px',
      margin_left: '26%',
      top: '136%',
      right: '49.5%',
      position: 'absolute',
    }),
    dashboard: props => ({
      position: 'absolute',
      top: '141%',
      left: '2%',
      fontSize: '20px',
      z_index: '0',
    }),
    one_block: props => ({
      display: 'flex',
      marginTop: '10px',
    }),
    dashboard_img: props => ({
      marginRight: '20px',
      height: '30px',
      width: '30px',
    }),
    dashboard_text: props => ({
      margin: '0',
      color: '#000',
    }),
    dashboard_2: props => ({
      position: 'absolute',
      top: '141%',
      left: '39%',
      fontSize: '20px',
      z_index: '0',
    }),
    center_img: props => ({
      width: '40%',
    }),
    center: props => ({
      position: 'absolute',
      top: '102%',
      left: '43%',
      z_index: '0',
    }),
    right_end: props => ({
      width: '50%',
    }),
    right: props => ({
      position: 'absolute',
      top: '66%',
      right: '-9%',
      z_index: '0',
    }),
    dashboard_3_text: props => ({
      margin: '0',
      fontSize: '20px',
      padding_left: '25px',
      color: '#000',
      marginLeft: '30px',
    }),
    dashboard_p_text: props => ({
      position: 'absolute',
      top: '210px',
      width: '100%',
      right: '40px',
      fontSize: '20px',
      color: '#000',
    }),
    right_end_icon: props => ({
      width: '8px',
      marginLeft: '26%',
      top: '136%',
      right: '16%',
      position: 'absolute',
    }),
    dashboard_3: props => ({
      position: 'absolute',
      top: '141%',
      left: '70%',
      fontSize: '20px',
      z_index: '0',
  }),
  },
  load_icon: props => ({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  spinner: props => ({
    width: '15%',
    borderRadius: '50px',
  }),
});

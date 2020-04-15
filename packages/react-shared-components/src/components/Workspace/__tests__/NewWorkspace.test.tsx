import * as React from 'react';
import  {NewWorkspace} from '../components/NewWorkspace';
import {shallow, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import {MockedProvider} from 'react-apollo/test-utils';
import 'jest';

describe('<NewWorkspace/>', () => {

  let component;

  beforeEach(() => {
    component = shallow(<MockedProvider mocks={[]}><NewWorkspace/></MockedProvider>);
  });

  it('Length', () => {
    expect(component).toHaveLength(1);
  });

});

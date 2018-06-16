import React from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest/lib/mui';
import { withRouter } from 'react-router-dom';

import DollarIcon from 'material-ui/svg-icons/editor/attach-money';

import { colors, spaces, restClient, baseSpacingUnit } from './constants';

class Dashboard extends React.Component {
  state = {
    orderStats: {},
  };

  componentDidMount() {
    const url = restClient + '/orders/stats';
    axios
      .get(url)
      .then(response => {
        if (response && response.data) {
          this.setState({
            orderStats: response.data,
          });
        }
      })
      .catch(error => {
        console.error('xxx', error);
      });
  }

  navigateToOrders = () => {
    this.props.history.push('/orders');
  };

  render() {
    const { orderStats } = this.state;

    return (
      <div>
        <Card>
          <ViewTitle title="Dashboard" />
          <CardHeader title="Admin Panel for evisa-vn.com" />\
          <CardText>
            Legend:
            <p>Visa Type:</p>
            <ul>
              <li>1MS: 1 Month Single - 1MM: 1 Month Multiple</li>
              <li>3MS: 3 Month Single - 3MM: 3 Month Multiple</li>
              <li>6MM: 6 Month Multiple</li>
              <li>1YM: 1 Year Multiple</li>
            </ul>
          </CardText>
        </Card>

        <div
          style={{
            marginTop: spaces.m,
            cursor: 'pointer',
          }}
          onClick={this.navigateToOrders}
        >
          <Card
            style={{
              borderLeft: `solid ${spaces.xs}px ${colors.cyan}`,
              flex: 1,
              maxWidth: baseSpacingUnit * 25,
            }}
          >
            <DollarIcon
              style={{
                float: 'left',
                width: spaces.xl,
                height: spaces.xl,
                padding: spaces.xs,
                color: colors.cyan,
              }}
            />
            <CardTitle title={'Orders'} />
            <CardText>
              {Object.keys(orderStats).map(status => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      paddingTop: spaces.s,
                    }}
                    key={status}
                  >
                    <div
                      style={{
                        textTransform: 'capitalize',
                        display: 'flex',
                        flex: 1,
                      }}
                    >
                      {status}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flex: 1,
                      }}
                    >
                      {orderStats[status]}
                    </div>
                  </div>
                );
              })}
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);

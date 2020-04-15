// import * as React from 'react';
// import { NamedProps, ChildDataProps, QueryProps, graphql, ChildProps, DataValue, GraphqlQueryControls } from 'react-apollo';
// import gql from 'graphql-tag';


// const historyQuery = gql`
//   query history($solutionId: String) {
//     history(solutionId: $solutionId) {
//       solutionId
//       delta
//     }
//   }
// `;

// interface Data {
//     history: [
//         {
//             solutionId: string;
//             delta: number;
//         }
//     ];
// }

// interface Props {
//     solutionId: string;
//     // organisationData: QueryProps & Data;
// }

// // --------------------------
// // // standard wrapping
// // const withHistory = graphql<Props, Data>(historyQuery, {
// //     options: ownProps => ({
// //         variables: {
// //             solutionId: ownProps.solutionId,
// //         },
// //     }),
// // });

// class HistoryView extends React.Component<Partial<Props> & { organisationData: DataValue<Data> }, {}> {
//     public render() {
//         if (this.props.organisationData.history.length > 0) {
//             return <div>yay type checking works</div>;
//         } else {
//             return null;
//         }
//     }
// }

// // const HistoryViewWithData = withHistory(HistoryView);
// // <HistoryViewWithData solutionId="foo" />; // tslint:disable-line

// // // --------------------------
// // // stateless function with data
// // const HistoryViewSFC = graphql<Props, Data>(historyQuery, {
// //     options: ownProps => ({
// //         variables: {
// //             solutionId: ownProps.solutionId,
// //         },
// //     }),
// // })(props => {
// //     if (this.props.data.history.length > 0) {
// //         return <div>yay type checking works</div>;
// //     } else {
// //         return null;
// //     }
// // });

// // <HistoryViewSFC solutionId="foo" />; // tslint:disable-line

// // // --------------------------
// // // decorator
// // @graphql<Props, Data>(historyQuery)
// // class DecoratedHistoryView extends React.Component<ChildProps<Props, Data>> {
// //     public render() {
// //         if (this.props.data.history.length > 0) {
// //             return <div>yay type checking works</div>;
// //         } else {
// //             return null;
// //         }
// //     }
// // }
// // <DecoratedHistoryView solutionId="foo" />; // tslint:disable-line

// // --------------------------
// // with using name
// const withHistoryUsingName = graphql<Props, Data, {}, { organisationData: DataValue<Data> }>(historyQuery, {
//     props: ({
//         data,
//     }) => ({
//         organisationData: data,
//     }),
// });


// const HistoryViewUsingName = withHistoryUsingName(HistoryView);
// <HistoryViewUsingName solutionId="foo" />; // tslint:disable-line



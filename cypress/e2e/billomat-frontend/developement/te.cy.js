describe('GraphQL API mock data', () => {
    it('Get all clients', () => {
          
          // Then make the request
          cy.request({
            method: 'POST',
            url: 'https://supergraph.billodev.net/graphql',
            headers: {
              "X-BillomatApiKey": "dresden",
              Bauthentication: "41l5ry54tQjiAPqyhnktmqmCZGoN/ty2EwE18FrXidHOsFJrA1DzoCex92xhNZdd185DUcOk+JTTonr2E+BPdg+V22TKCW295CGe3AIscj08878MxV+SoL2hFzirQmzS77Vui7fD7oBcneh4IfG7cenNOQ==",
              authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ3MzU4YWE5MWJhNGFlZDYxMTY4ZTc0MDUxOWZhYzczOGVlZjFjYjg5MjUwYjkzMGI0MTc1YjI1ZTgyOTk4YmZlOWU0MmI5ZjZkNWM5NDI3In0.eyJhdWQiOiIxIiwianRpIjoiNDczNThhYTkxYmE0YWVkNjExNjhlNzQwNTE5ZmFjNzM4ZWVmMWNiODkyNTBiOTMwYjQxNzViMjVlODI5OThiZmU5ZTQyYjlmNmQ1Yzk0MjciLCJpYXQiOjE3MTA0OTYyNDEsIm5iZiI6MTcxMDQ5NjI0MSwiZXhwIjoxNzEwNDk5ODQxLCJzdWIiOiJ1c2VyLTI0NDYiLCJzY29wZXMiOlsiYXJ0aWNsZXM6ZGVsZXRlIiwiY2xpZW50czpkZWxldGUiLCJzdXBwbGllcnM6ZGVsZXRlIiwib2ZmZXJzOmRlbGV0ZSIsImNvbmZpcm1hdGlvbnM6ZGVsZXRlIiwiaW52b2ljZXM6ZGVsZXRlIiwiY3JlZGl0X25vdGVzOmRlbGV0ZSIsImRlbGl2ZXJ5X25vdGVzOmRlbGV0ZSIsInJlbWluZGVyczpkZWxldGUiLCJpbmNvbWluZ3M6ZGVsZXRlIiwibGV0dGVyczpkZWxldGUiLCJzZXR0aW5nczpteV9hY2NvdW50OndyaXRlIiwic2V0dGluZ3M6ZG9jdW1lbnRzOndyaXRlIiwic2V0dGluZ3M6Y29uZmlndXJhdGlvbjp3cml0ZSIsInNldHRpbmdzOmFkbWluaXN0cmF0aW9uOndyaXRlIiwic2V0dGluZ3M6YWRkb25zOndyaXRlIiwic2V0dGluZ3M6bXlfYWRkb25zOndyaXRlIiwibmV0X2luY29tZV9zdGF0ZW1lbnQ6ZGVsZXRlIiwiYWNjb3VudGluZ19leHBvcnQ6d3JpdGUiLCJiYW5raW5nOndyaXRlIl0sImZlYXR1cmVzIjpbIm5vdGlmaWNhdGlvbnMiLCJmaWdvIiwiZm9udHMiLCJyb2xlcyIsImdpbmkiLCJhY2NvdW50aW5nX2V4cG9ydCIsImFjY291bnRhbnRfYWNjZXNzIiwiYmFua2luZyIsInZhdC1yZXR1cm4iXSwidXNlciI6eyJpZCI6MjQ0NiwiYWNjb3VudF9pZCI6MjQ1LCJmaXJzdF9uYW1lIjoiU2F1cmFiaCIsImJpbGxvbWF0X2lkIjoiZHJlc2RlbiJ9fQ.BEQRNGng9m3Op0nLTwE-ZqQis2esegHjGPzbe2xZRp42aic4gJfvh_qPukNZzIDgbmJghe-Aqg_wrVuQmq3KtjsubSa8w7su9gpV8kNCD1OGiPROv5ggwGkrqTC38MoUhKa3XnCujul0zAIKIGkRqoG08QmwC2bxfHQf7yGj8rmEvWFc6jA0ZQzeFQEn866FPZ3F1UqH0H-NdbOv9rC370y22xQfUO4kEEwZAaGhTlqVKraytl7xQCy7TpHnrMhT4ck-Jq0C1CBez5qWm1x6SwFWxDbxxoa8SBPMLqCy0DkIsu8r0hXVWShiuPZRemLtuiunVXhDXzEHbSVTW5aymataA-gJ4vLKZ8b4YQbytw9u5cW5jNaF4qJw_4WYEKNZL3KncHgL_ocsn0ebZX9VM4oQ8mZzVG4KmyrgHQz45gp04S8ekGwq5D7nUMmgTX4qbY3yQomrI6lidROsSilOne4tGDWhcJTcfrWcBk06wQ79A9d5mKVmlBQmn2bSOLF8s3GXvsdO4Bm0nfrtrIi_S7MviSwjmsqa2kHxHCt67mOQxnf0Mkdppa4E9IqLCOcZRr8cDvAJgmsSetNsPjrUKgxg7q6Pxc1Qnou1qvPrSel4qNMhqvfvbLnn2biijZFWcVGaiLTZ57sXFHtyquKNQG_732ECwTFi1vuUpZ4zHWs",
            },
            body: {
              query: `
              query getClientsOverview($pagination: PaginationParams, $filter: ClientFilter, $orderBy: String, $orderDirection: String) {
                documents: clients(
                  pagination: $pagination
                  filter: $filter
                  orderBy: $orderBy
                  orderDirection: $orderDirection
                ) {
                  page
                  perPage
                  total
                  results {
                    id
                    clientNumber
                    name
                    firstName
                    lastName
                    prettyName
                    street: address
                    zip
                    city
                    created
                    turnover
                    __typename
                  }
                  __typename
                }
              }
              `
            }
          }).then(res => {
            
            //expect(res.status).to.eq(200)
            cy.log("dkjhdhdhkdh")
            cy.log(res.body.data.documents.total)//.to.eq('20000')
          
        
          });
          
      
      
      
      
    });
;

});

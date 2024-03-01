
describe('GraphQL API mock data', () => {
    it('Get all import account', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://supergraph.billodev.net/graphql',
          }, (request) => {
            console.log("dkjhdhdhkdh")
            // Check if this is the request you want to intercept
            if (request.includes('importedBankAccounts')) {

                request.reply((res) => {
                // Modify the response data here
                res.body.data.importedBankAccounts.forEach(account => {
                  account.balance.available = '20000';
                });
              });
            }
          });
          
          // Then make the request
          cy.request({
            method: 'POST',
            url: 'https://supergraph.billodev.net/graphql',
            headers: {
              "X-BillomatApiKey": "dresden",
              Bauthentication: "5Xipb2/VaQF8KUO1iRTDH3nb4/jVAbP1Qr3L9WObZT59J6yA5ncMWZarnRLXV918335hhQCJKm61nEbvhU2Yge0Kpo6AYnLEDjBPkiL9115rPLrcBDY3Xc2hCJVURY5MfaxeE1OkttS7Ln9bAkQIHJTlTQ==",
              authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg3ZGE0MTc2MzQ5MzRhNzJhN2U2MzY1OGVkYmQyZDUwMTljNWVjYWQ0ODk2MjhmMWJmNWYzNjlhMjMwNTQxZGNlZjY4NGVlM2NiYjQzYzE1In0.eyJhdWQiOiIxIiwianRpIjoiODdkYTQxNzYzNDkzNGE3MmE3ZTYzNjU4ZWRiZDJkNTAxOWM1ZWNhZDQ4OTYyOGYxYmY1ZjM2OWEyMzA1NDFkY2VmNjg0ZWUzY2JiNDNjMTUiLCJpYXQiOjE3MDkyOTYwNTAsIm5iZiI6MTcwOTI5NjA1MCwiZXhwIjoxNzA5Mjk5NjUwLCJzdWIiOiJ1c2VyLTI0NDYiLCJzY29wZXMiOlsiYXJ0aWNsZXM6ZGVsZXRlIiwiY2xpZW50czpkZWxldGUiLCJzdXBwbGllcnM6ZGVsZXRlIiwib2ZmZXJzOmRlbGV0ZSIsImNvbmZpcm1hdGlvbnM6ZGVsZXRlIiwiaW52b2ljZXM6ZGVsZXRlIiwiY3JlZGl0X25vdGVzOmRlbGV0ZSIsImRlbGl2ZXJ5X25vdGVzOmRlbGV0ZSIsInJlbWluZGVyczpkZWxldGUiLCJpbmNvbWluZ3M6ZGVsZXRlIiwibGV0dGVyczpkZWxldGUiLCJzZXR0aW5nczpteV9hY2NvdW50OndyaXRlIiwic2V0dGluZ3M6ZG9jdW1lbnRzOndyaXRlIiwic2V0dGluZ3M6Y29uZmlndXJhdGlvbjp3cml0ZSIsInNldHRpbmdzOmFkbWluaXN0cmF0aW9uOndyaXRlIiwic2V0dGluZ3M6YWRkb25zOndyaXRlIiwic2V0dGluZ3M6bXlfYWRkb25zOndyaXRlIiwibmV0X2luY29tZV9zdGF0ZW1lbnQ6ZGVsZXRlIiwiYWNjb3VudGluZ19leHBvcnQ6d3JpdGUiLCJiYW5raW5nOndyaXRlIl0sImZlYXR1cmVzIjpbIm5vdGlmaWNhdGlvbnMiLCJmaWdvIiwiZm9udHMiLCJyb2xlcyIsImdpbmkiLCJhY2NvdW50aW5nX2V4cG9ydCIsImFjY291bnRhbnRfYWNjZXNzIiwiYmFua2luZyIsInZhdC1yZXR1cm4iXSwidXNlciI6eyJpZCI6MjQ0NiwiYWNjb3VudF9pZCI6MjQ1LCJmaXJzdF9uYW1lIjoiU2F1cmFiaCIsImJpbGxvbWF0X2lkIjoiZHJlc2RlbiJ9fQ.rMh8V70xJfAef69d2Qoe5KsBbzWsmWZ4JHlNg2k7z1rVg0PANaxu_fI2x8vQ-Q72U7p6lnVPyaozOl2e3IsZPW5uFygtMDw7Rvs0_aljrQHFRUmcsFCvcfTtAyez5GskMixTUF3S1737QvYFcSH19PdIBsqz9iBsd4lJSd0fupkfxZzGs3KIIojJfiIUnheRD7Ix7hF-5wI-3N-REZLM7QX5wgxZPe5vECbmmLiDQsKA0XyCYZY52ZWI0aksLeK9A8_u99m6ZHzxnsxodnb6pnU7CMXQYeF-IemtRbujXcRfk5T4r1rx89uuMvp0ByWsvJFEXtESHFguDbeogj2RsHKWaSIRIs3eDkyOUbc5w6z5qt-UMiEIaJdYm2Xwj45BgjsjUDfKvR7OzKTcnR6HsKREU11SbDf4m5mX5Wg9Yeuhsp0kbSMzlzWq9kxBQwxSvGj9RGMb0hg224O8NztqeWu8jPedwMtpk55pkWubnfmS5pYWArnrfLSkz9ujHQ58Vlp0wAxYZagYaG86FjMAPURtRXP8pErD1HPzdEZwBLkix0FOjeiiMt6JOlBBWX6UdxpvvJ7nxNRGMhSiwdrjOJ8TlzSiGwDNe__aZ8Sz0chpGW_EXUXNHDN_BVin0oE77LynLYRLZmdIWXEJdt9oIci83ljv-Bz58niDN6iuXdU",
            },
            body: {
              query: `
              query importedBankAccounts {
                importedBankAccounts: myBankAccounts(showOnlyOnBoarded: true) {
                  accountType
                  customInitials: acronym
                  active
                  customName: alias
                  balance {
                    available
                    balanceAmount
                    bankAccountId
                    createdAt
                    currency
                    date
                    deletedAt
                    id
                    limit
                    monthlyBalance
                    updatedAt
                    __typename
                  }
                  bankName
                  bic
                  country
                  createdAt
                  deletedAt
                  accountName: description
                  expiredAt
                  fintecBankAccountId
                  fintecBankConnectionId
                  firstSignificantBalanceDate
                  holder
                  iban
                  id
                  jointAccount
                  lastSyncAt
                  customColor: preferredColor
                  syncCount
                  transactionPossible
                  updatedAt
                  user {
                    createdAt
                    deletedAt
                    fintecBankUserId
                    id
                    principalId
                    isAutoBookingEnabled
                    updatedAt
                    __typename
                  }
                  userId
                  imported
                  __typename
                }
              }       
              `
            }
          }).then(res => {
            
            expect(res.status).to.eq(200)
            cy.log("dkjhdhdhkdh")
            cy.log(res.body.data.importedBankAccounts[2].balance.available)//.to.eq('20000')
          
        
          });
          
      
      
      
      
    });
;

});


exports.createPages = async ({ actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
      fromPath: `/docs/*`,
      toPath: `https://flatfileinc.mintlify.dev/docs/*`,
      statusCode: 200,
    })
  }
import React from 'react'
import ArticleCard from './ArticleCard'

const DashboardLivraison = () => {
  const livraison = true
  return (
    <div>
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6"></div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right"></ol>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section>
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}

              {/* /.row */}
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <section className="col-lg-12 connectedSortable">
                  {/* Custom tabs (Charts with tabs)*/}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fas fa-chart-pie mr-1" />
                        Facturation
                      </h3>
                      <div className="card-tools"></div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content p-0">
                        <ArticleCard livraison={livraison} />
                      </div>
                      {/* /.card-body */}
                    </div>
                  </div>
                  {/* /.card */}
                  {/* DIRECT CHAT */}

                  {/*/.direct-chat */}
                  {/* TO DO List */}

                  {/* /.card */}
                </section>
                {/* /.Left col */}
                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                {/* right col */}
              </div>
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>

          {/* /.content */}
        </div>
      </div>
      )
    </div>
  )
}

export default DashboardLivraison

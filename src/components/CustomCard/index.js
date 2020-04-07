import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardActions, Divider, CardMedia } from '@material-ui/core';
import Proptypes from 'prop-types';

import './styles.css';

export default function CustomCard(props) {
  return (
    <div className={props.containerClass}>
      <Link to={props.link}>
        <Card className="card">
          <CardActionArea className="card-action-area">
            { props.image ? (
              <CardMedia
                component="img"
                className="card-img"
                height="100"
                image={props.image}
                title="image"
              />
            ) : null }
            <CardContent className="card-content">
              {props.children}
            </CardContent>
          </CardActionArea>
          {props.footer ? (
            <>
              <Divider />
              <CardActions className="card-footer">
                {props.footer}
              </CardActions>
            </>
          ) : null}
        </Card>
      </Link>
    </div>
  );
}

CustomCard.propTypes = {
  containerClass: Proptypes.string.isRequired,
  children: Proptypes.element.isRequired,
  link: Proptypes.string.isRequired,
  footer: Proptypes.element,
  image: Proptypes.string,
};
